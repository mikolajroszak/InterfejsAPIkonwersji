class UppromoteCustomerReferral {
    configurations
    setting = {
        design: {
            refer_customer_button: {
                refer_button_text: 'Refer & Earn',
                refer_background_color: '#e81c44',
                refer_text_color: '#ffffff',
                web_position: 'right-bottom',
                mobile_position: 'right-bottom',
            },
            refer_customer_invite: {
                popup_header: '',
                popup_description: '',
                button_text_get_invite: '',
                button_copy_invite: '',
                popup_background_color: '#e81d43',
                popup_text_color: '#ffffff',
                content_signup_placeholder_text: 'Your email address',
                content_post_signup_title: '',
                content_post_signup_description: '',
                design_color_popup_background: '#ffffff',
                widget_active: 1,
            },
            refer_customer_incentive_popup: {
                shop_header: '',
                shop_description: '',
                shop_button_text: '',
                shop_background_color: '#e81d43',
                shop_text_color: '#ffffff',
                popup_background_color: '#ffffff',
                popup_shop_text_color: '#e81d43',
            },
        },
        program: {
            active: false,
            shop: '',
            incentive: {
                type: '',
                value: 0,
                price_rule_id: 0,
                coupon: '',
            },
            program: '',
        },
    }
    uiComponents = {
        widget: {
            referContainer: undefined,
            referIcon: undefined,
            closeButton: undefined,
            getInviteLinkButton: undefined,
            inviteEmailInput: undefined,
            closeButtonIcon: undefined,
            errorText: undefined,
            header: undefined,
            description: undefined,
        },
        shopNow: {
            header: undefined,
            description: undefined,
        },
    }

    constructor(
        configurations = {
            env: 'dev',
            apiHost: 'affiliate.test',
            cdnHost: 'affiliate.test',
        },
    ) {
        if (
            !configurations ||
            !['dev', 'test', 'production'].includes(configurations.env) ||
            !configurations.apiHost ||
            !configurations.cdnHost
        ) {
            throw new Error('Configuration invalid')
        }
        this.configurations = configurations
    }

    initial() {
        this.logger('Loaded')

        if (this.getCookie('uppromote_customer_referral_no_setting')) {
            return
        }

        this.loadSetting().then((setting) => {
            if (!setting) return

            if (!('program' in setting)) {
                return;
            }

            this.setting = setting
            if (!setting.program.active) return
            this.renderReferCustomer()
            this.addEventListener()
            this.applyRegisterStatus()
            this.addUppromoteListener()
        })

        window.addEventListener('UpPromote::Customer::Registered', (event) => {
            if (event.detail.from === 'widget') {
                return
            }
            this.applyRegisterStatus()
        })
    }

    async loadSetting() {
        const cdnHost = this.configurations.cdnHost
        const shop = this.getShopDomain()
        if (!shop) return
        const fileName = shop.replaceAll('.myshopify.com', '') + '.json'
        const currentTime = new Date().getTime()

        const settingFolder = () => {
            const absolutePath = 'storage/uploads/customer_referral_settings'
            if (this.configurations.env === 'dev') {
                return 'storage/' + absolutePath
            }
            return absolutePath
        }

        try {
            const setting = await fetch(
                `https://${cdnHost}/${settingFolder()}/${fileName}?v=${currentTime}`,
            )
            return setting.json().catch(() => {
                this.setCookie('uppromote_customer_referral_no_setting', 1, 1)
            })
        } catch (e) {
            this.setCookie('uppromote_customer_referral_no_setting', 1, 1)
            this.logger(e)
            return null
        }
    }

    logger(content = '') {
        console.log(
            `%c ► UpPromote Affiliate Marketing [Customer Referral Extension] - ${content}`,
            'background-color: #092C4C; color: #fff; padding: 5px;',
        )
    }

    addEventListener() {
        if (!this.uiComponents.widget.referContainer) return // User has been close icon
        const actions = [
            {
                element: this.uiComponents.widget.referIcon,
                event: 'click',
                action: this.onReferButtonClicked,
            },
            {
                element: this.uiComponents.widget.closeButton,
                event: 'click',
                action: this.onReferButtonClicked,
            },
            {
                element: this.uiComponents.widget.getInviteLinkButton,
                event: 'click',
                action: this.submitRegister,
            },
            {
                element: this.uiComponents.widget.closeButtonIcon,
                event: 'click',
                action: this.onCloseIconButton,
            },
        ]
        actions.forEach((elm) =>
            elm.element.addEventListener(elm.event, elm.action),
        )
    }

    addShopNowPopupEventListener() {
        if (this.uiComponents.shopNow.closeShopNowButton) {
            this.uiComponents.shopNow.closeShopNowButton.addEventListener(
                'click',
                function (ev) {
                    uppromoteCustomerReferral.onCloseShopNowButtonClicked(ev)
                },
            )
            this.uiComponents.shopNow.shopNowOverlayContainer.addEventListener(
                'click',
                function (ev) {
                    uppromoteCustomerReferral.onCloseShopNowButtonClicked(ev)
                },
            )
            this.uiComponents.shopNow.shopNowButton.addEventListener(
                'click',
                function (e) {
                    uppromoteCustomerReferral.onCloseShopNowButtonClicked(e)
                },
            )
        }
    }

    applyRegisterStatus() {
        if (!this.uiComponents.widget.referContainer) return // User has been close icon
        const customerReferLink = this.getCookie('scaaf_refer_customer_link')
        if (!customerReferLink) {
            return
        }
        const designSetting = this.setting.design.refer_customer_invite
        this.applyInviteLink(customerReferLink)
        this.setRegisterState(customerReferLink)
        // New version
        if (designSetting.content_post_signup_title) {
            this.uiComponents.widget.header.textContent =
                designSetting.content_post_signup_title
            this.uiComponents.widget.description.textContent =
                designSetting.content_post_signup_description
        }
    }

    /**
     * Process flow
     */
    renderReferCustomer() {
        if (this.closedInviteIcon()) return
        let isOldVersion = !(
            'widget_active' in this.setting.design.refer_customer_invite
        )
        if (!isOldVersion) {
            if (!this.setting.design.refer_customer_invite.widget_active) {
                return
            }
        }
        const container = this.renderCustomerReferContainer()
        const button = this.renderReferIcon()
        const closeButtonIcon = this.renderCloseInviteButton()
        const inviteContainer = this.renderInviteContainer()
        const closeButton = this.renderCloseButton()
        const inviteContentContainer = this.renderInviteContentContainer()
        const inviteHeader = this.renderInviteHeader()
        const inviteContent = this.renderInviteContent()
        const inviteInputs = this.renderInviteInputContainer()
        const inviteInput = this.renderInviteInput()
        const inviteInputAddon = this.renderInviteInputAddon()
        const errorText = this.renderErrorContainer()
        button.append(closeButtonIcon)
        inviteInputs.append(inviteInput, inviteInputAddon)
        inviteContentContainer.append(
            inviteHeader,
            inviteContent,
            inviteInputs,
            errorText,
        )
        inviteContainer.append(closeButton, inviteContentContainer)
        container.append(inviteContainer, button)
        document.body.append(container)
    }

    renderShopNowPopup() {
        const overlay = this.renderShopNowOverlay()
        const container = this.renderShopNowContainer()
        const closeButton = this.renderCloseShopNowButton()
        const header = this.renderShopNowHeader()
        const content = this.renderShopNowContent()
        const shopNowButton = this.renderShopNowButton()
        this.uiComponents.shopNowButton = shopNowButton
        container.append(closeButton, header, content, shopNowButton)
        overlay.append(container)
        document.body.append(overlay)

        const removeMessageBarInterval = setInterval(() => {
            const messageBar = document.querySelector('.scaaf-message-bar')
            if (messageBar) {
                messageBar.remove()
            }
        }, 100)
        setTimeout(() => clearInterval(removeMessageBarInterval), 5e3)
    }

    onReferButtonClicked() {
        let showAnimateName = 'fadeInUp'
        let hideAnimateName = 'fadeOutDown'
        const inviteContainer =
            uppromoteCustomerReferral.uiComponents.widget.inviteContainer
        const webPosition =
            uppromoteCustomerReferral.uiComponents.widget.referContainer.dataset
                .webPosition
        if (getComputedStyle(inviteContainer).display === 'none') {
            if (webPosition.includes('-bottom')) {
                showAnimateName = 'fadeInUp'
            }
            if (
                webPosition.includes('-center') ||
                webPosition.includes('-top')
            ) {
                showAnimateName = 'fadeInDown'
            }
            inviteContainer.style.animationName = showAnimateName
            setTimeout(() => {
                inviteContainer.style.display = 'block'
            }, 100)
            return
        }
        if (webPosition.includes('-bottom')) {
            hideAnimateName = 'fadeOutDown'
        }
        if (webPosition.includes('-center') || webPosition.includes('-top')) {
            hideAnimateName = 'fadeOutUp'
        }
        inviteContainer.style.animationName = hideAnimateName
        setTimeout(() => {
            inviteContainer.style.display = 'none'
        }, 500)
    }

    onCloseShopNowButtonClicked(event) {
        const classList = event.target.classList
        if (
            classList.contains('sca_aff_customer_refer_shop_now_overlay') ||
            classList.contains(
                'sca_aff_customer_refer_close_shop_now_button',
            ) ||
            classList.contains('sca_aff_customer_refer_shop_now_button')
        ) {
            this.uiComponents.shopNow.shopNowContainer.style.animationName =
                'fadeOutUp'
            this.uiComponents.shopNow.shopNowOverlayContainer.style.animationName =
                'fadeOut'
            setTimeout(() => {
                this.uiComponents.shopNow.shopNowOverlayContainer.style.display =
                    'none'
            }, 500)
        }
    }

    submitRegister() {
        const ui = uppromoteCustomerReferral.uiComponents.widget
        const registerButton = ui.getInviteLinkButton
        const input = ui.inviteEmailInput
        const errorText = ui.errorText
        if (registerButton.hasAttribute('data-created-affiliate')) {
            uppromoteCustomerReferral.copyInviteLink()
            return
        }
        const email = input.value
        if (!uppromoteCustomerReferral.isValidEmail(email)) {
            errorText.textContent = 'Please enter a valid email address'
            errorText.style.display = 'block'
            return
        }
        uppromoteCustomerReferral.setRegisteringStateButton()
        uppromoteCustomerReferral.postRegister(email)
    }

    onCloseIconButton() {
        uppromoteCustomerReferral.uiComponents.widget.referContainer.remove()
        sessionStorage.setItem('closed_refer_customer', '1')
    }

    postRegister(email) {
        const shop = this.setting.program.shop
        const apiHost = this.configurations.apiHost
        const errorText = this.uiComponents.widget.errorText
        this.fetchAndGetContent(
            `https://${apiHost}/api/refer-customer/register`,
            'POST',
            { email, shop },
        )
            .then((response) => {
                errorText.style.display = 'none'
                if (response?.error) {
                    errorText.textContent = response.error
                    errorText.style.display = 'block'
                    return
                }
                this.applyPostSignupContent()
                this.applyInviteLink(response?.data)
                this.setRegisterState(response?.data)
                window.dispatchEvent(
                    new CustomEvent('UpPromote::Customer::Registered', {
                        detail: {
                            invite_link: response?.data,
                            from: 'widget',
                        },
                    }),
                )
            })
            .finally(() => this.setRegisteringStateButton(false))
    }

    processCustomerReferLink() {
        if (!this.setting.program.active) return
        if (!this.isCustomerReferLink()) return
        if (!this.displayedShopNowPopup()) {
            this.renderShopNowPopup()
            this.addShopNowPopupEventListener()
            this.applyDiscountCode()
        }
    }

    closedInviteIcon() {
        return !!sessionStorage.getItem('closed_refer_customer')
    }

    /**
     * Helpers
     */

    getShopDomain() {
        try {
            if (Shopify) {
                return Shopify.shop
            }
            return ''
        } catch (e) {
            console.error(
                'Uppromote: getShopName() - Error when get shopify domain',
            )
            return ''
        }
    }

    displayedShopNowPopup() {
        const overlay = document.querySelector(
            `.sca_aff_customer_refer_shop_now_overlay`,
        )
        return !!overlay
    }

    isValidEmail(mail) {
        return  /^[\p{L}\u{0E00}-\u{0E7F}\.\-_+0-9!#\$%&'*+=?^_{|}~\/]{1,}[@][\p{L}\u{0E00}-\u{0E7F}\.\-_+0-9!#\$%&'*+=?^_{|}~\/]*[\p{L}0-9][\p{L}\u{0E00}-\u{0E7F}0-9\.\-_+!#\$%&'*+=?^_{|}~\/]*[.][\p{L}\u{0E00}-\u{0E7F}0-9\.\-_+!#\$%&'*+=?^_{|}~\/]{2,}$/u.test(mail)
    }

    setRegisterState(link) {
        this.setCookie('scaaf_refer_customer_link', link, 365)
    }

    async fetchAndGetContent(url = '', method = 'GET', body = {}) {
        body.shopify_domain = this.setting.program.shop
        if (['GET', 'HEAD'].includes(method)) {
            url = new URL(url)
            const bodyParams = new URLSearchParams(body)
            const urlParams = url.searchParams
            const allParameters = new URLSearchParams({
                ...Object.fromEntries(bodyParams),
                ...Object.fromEntries(urlParams),
            })
            url = `${url.origin}${url.pathname}?${allParameters.toString()}`
            const response = await fetch(url)
            return (await response.json()) || null
        } else {
            const formData = new FormData()
            Object.keys(body).forEach((key) => formData.append(key, body[key]))
            const response = await fetch(url, {
                method,
                headers: {},
                body: formData,
            })
            return (await response.json()) || null
        }
    }

    setCookie(cName, cValue, exDays) {
        const d = new Date()
        d.setTime(d.getTime() + exDays * 24 * 60 * 60 * 1000)
        let expires = 'expires=' + d.toUTCString()
        document.cookie = cName + '=' + cValue + ';' + expires + ';path=/'
    }

    getCookie(cName) {
        let name = cName + '='
        let decodedCookie = decodeURIComponent(document.cookie)
        let ca = decodedCookie.split(';')
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i]
            while (c.charAt(0) === ' ') {
                c = c.substring(1)
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length)
            }
        }
        return ''
    }

    isCustomerReferLink() {
        try {
            const url = window.location.search
            const searchParams = new URLSearchParams(url)
            let isCustomerReferLink = false
            if (searchParams.get('sca_ref') && searchParams.get('sca_crp')) {
                if (
                    parseInt(atob(this.setting.program.program)) ===
                    parseInt(atob(searchParams.get('sca_crp')))
                ) {
                    isCustomerReferLink = true
                }
            }
            return isCustomerReferLink
        } catch (ex) {
            console.error('Cant base64 decode customer refer program id')
            return false
        }
    }

    isProgramCustomerReferral(trackedAffiliateProgram) {
        try {
            const affiliateProgramId = parseInt(trackedAffiliateProgram)
            const customerReferralProgram = parseInt(
                atob(this.setting.program.program),
            )
            return affiliateProgramId === customerReferralProgram
        } catch (e) {
            console.error(e.message)
            return false
        }
    }

    addUppromoteListener() {
        window.addEventListener('uppromote:tracked-affiliate', (e) =>
            this.onAffiliateTracked(e.detail),
        )
    }

    onAffiliateTracked(
        props = {
            available: false,
            info: { program_id: 0 },
        },
    ) {
        uppromoteCustomerReferral.setCookie(
            'scaaf_is_program_customer',
            props.available ? 1 : 0,
            30,
        )
        if (!props.available) return
        const isCustomerReferralProgram = this.isProgramCustomerReferral(
            props.info.program_id,
        )
        uppromoteCustomerReferral.setCookie(
            'scaaf_is_program_customer',
            isCustomerReferralProgram ? 1 : 0,
            30,
        )
        if (isCustomerReferralProgram) {
            uppromoteCustomerReferral.processCustomerReferLink()
        }
    }

    /**
     * UI function
     */
    setRegisteringStateButton(posting = true) {
        const getInviteLinkButton = this.uiComponents.widget.getInviteLinkButton
        const inviteEmailInput = this.uiComponents.widget.inviteEmailInput
        if (posting) {
            getInviteLinkButton.setAttribute('disabled', '')
            getInviteLinkButton.style.cursor = 'wait'
            inviteEmailInput.setAttribute('disabled', '')
            return
        }
        getInviteLinkButton.removeAttribute('disabled')
        getInviteLinkButton.style.cursor = 'pointer'
        inviteEmailInput.removeAttribute('disabled')
    }

    applyInviteLink(affiliateLink) {
        const getInviteLinkButton = this.uiComponents.widget.getInviteLinkButton
        const inviteEmailInput = this.uiComponents.widget.inviteEmailInput
        getInviteLinkButton.removeAttribute('disabled')
        getInviteLinkButton.setAttribute('data-created-affiliate', 'true')
        getInviteLinkButton.textContent =
            this.setting.design.refer_customer_invite.button_copy_invite
        inviteEmailInput.type = 'text'
        inviteEmailInput.value = affiliateLink
        inviteEmailInput.setAttribute('readonly', '')
        this.uiComponents.widget.inviteContentContainer.append(
            this.renderShareContainer(affiliateLink),
        )
    }

    copyInviteLink() {
        const input = this.uiComponents.widget.inviteEmailInput
        const copyButton = this.uiComponents.widget.getInviteLinkButton
        input.focus()
        input.select()
        navigator.clipboard.writeText(input.value).then(() => {
            copyButton.textContent = 'Copied!'
            setTimeout(() => {
                copyButton.textContent =
                    this.setting.design.refer_customer_invite.button_copy_invite
            }, 1e3)
        })
    }

    applyPostSignupContent() {
        const setting = this.setting.design.refer_customer_invite
        if (!setting.content_post_signup_title) {
            return
        }
        this.uiComponents.widget.header.textContent =
            setting.content_post_signup_title
        this.uiComponents.widget.description.textContent =
            setting.content_post_signup_description
    }

    /**
     * Element builder
     */
    renderElm(elmName = 'div', classes, attributes = {}) {
        const element = document.createElement(elmName)
        if (classes) {
            if (Array.isArray(classes)) {
                classes.map((x) => element.classList.add(x))
            } else {
                if (classes && classes.length !== 0)
                    element.classList.add(classes)
            }
        }
        Object.keys(attributes).forEach((key) =>
            element.setAttribute(key, attributes[key]),
        )
        return element
    }

    renderCustomerReferContainer() {
        const setting = this.setting.design.refer_customer_button
        this.uiComponents.widget.referContainer = this.renderElm(
            'div',
            'sca_aff_customer_refer_container',
            {
                'data-web-position': setting.web_position,
                'data-mobile-position': setting.mobile_position,
            },
        )
        return this.uiComponents.widget.referContainer
    }

    renderReferIcon() {
        const buttonSetting = this.setting.design.refer_customer_button
        const button = this.renderElm('button', 'sca_aff_customer_refer_button')
        /**
         * Change color by filter
         * https://angel-rs.github.io/css-color-filter-generator/
         * @type {HTMLDivElement}
         */
        const converterHTML = this.renderElm('div')
        converterHTML.innerHTML = `<svg class="sca_aff_customer_refer_icon" xmlns="http://www.w3.org/2000/svg" fill="${buttonSetting.refer_text_color}" version="1.1" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512"><g><g><path d="M461.902,100.195h-91.884c12.656-8.15,24.541-17.708,35.446-28.613c6.52-6.519,6.52-17.089,0-23.61    c-6.52-6.521-17.09-6.52-23.61,0c-15.83,15.829-34.094,28.313-53.938,37.102c17.449-21.04,16.297-57.161-9.243-75.57    c-20.084-14.474-45.953-11.651-62.673,3.293c-16.711-14.935-42.578-17.78-62.676-3.294c-26.018,18.753-26.17,55.16-9.243,75.57    c-19.843-8.789-38.109-21.274-53.938-37.101c-6.52-6.519-17.09-6.519-23.61,0c-6.519,6.52-6.519,17.09,0,23.61    c10.905,10.905,22.791,20.462,35.446,28.613H50.098c-27.617,0-50.084,22.468-50.084,50.084v66.779    c0,9.22,7.475,16.695,16.695,16.695h16.695v228.162c0,27.617,22.468,50.084,50.084,50.084c16.252,0,332.486,0,345.026,0    c27.617,0,50.084-22.468,50.084-50.084V233.754h16.695c9.22,0,16.695-7.475,16.695-16.695V150.28    C511.987,122.662,489.519,100.195,461.902,100.195z M205.916,478.61H83.487c-9.206,0-16.695-7.489-16.695-16.695V233.754h139.123    V478.61z M205.916,200.364H50.098H33.403V150.28c0-9.206,7.489-16.695,16.695-16.695h155.818V200.364z M205.916,53.111    c0-3.044-0.741-10.987,6.933-16.518c4.382-3.159,9.858-4.022,15.042-2.295c6.827,2.276,11.415,8.641,11.415,15.838v34.863    l-26.207-18.169C208.6,63.711,205.916,58.583,205.916,53.111z M272.695,478.61h-33.39V233.754h33.39V478.61z M272.695,200.364    h-33.39v-66.779h33.39V200.364z M298.901,66.829L272.695,85V50.137c0-7.198,4.588-13.563,11.416-15.838    c5.209-1.736,10.681-0.848,15.041,2.295c7.631,5.498,6.933,13.349,6.933,16.518C306.084,58.583,303.4,63.711,298.901,66.829z     M445.207,461.916c0,9.206-7.489,16.695-16.695,16.695H306.084V233.754h139.123V461.916z M478.597,200.364h-16.695H306.084    v-66.779h155.818c9.206,0,16.695,7.489,16.695,16.695V200.364z"/></g></g></svg>`
        const text = this.renderElm('span')
        text.textContent = buttonSetting.refer_button_text
        button.style.backgroundColor = buttonSetting.refer_background_color
        button.style.color = buttonSetting.refer_text_color
        button.prepend(converterHTML.firstChild, text)
        this.uiComponents.widget.referIcon = button
        return button
    }

    /**
     * Render close button for invite button
     * @returns {HTMLDivElement}
     */
    renderCloseInviteButton() {
        const closeButton = this.renderElm(
            'span',
            'sca_aff_customer_refer_close_icon_button',
        )
        this.uiComponents.widget.closeButtonIcon = closeButton
        closeButton.innerHTML = '&times;'
        return closeButton
    }

    renderInviteContainer() {
        const inviteContainer = this.renderElm(
            'div',
            'sca_aff_customer_refer_invite_container',
        )
        inviteContainer.style.backgroundColor =
            this.setting.design.refer_customer_invite.design_color_popup_background
        this.uiComponents.widget.inviteContainer = inviteContainer
        return inviteContainer
    }

    renderCloseButton() {
        const button = this.renderElm(
            'button',
            'sca_aff_customer_refer_close_button',
            {
                type: 'button',
            },
        )
        button.innerHTML = '&times;'
        this.uiComponents.widget.closeButton = button
        return button
    }

    renderInviteContentContainer() {
        const element = this.renderElm(
            'div',
            'sca_aff_customer_refer_invite_contents',
        )
        this.uiComponents.widget.inviteContentContainer = element
        return element
    }

    renderInviteHeader() {
        const head = this.renderElm(
            'div',
            'sca_aff_customer_refer_invite_header',
        )
        head.textContent =
            this.setting.design.refer_customer_invite.popup_header
        this.uiComponents.widget.header = head
        head.style.color =
            this.setting.design.refer_customer_invite.design_color_popup_text
        return head
    }

    renderInviteContent() {
        const content = this.renderElm(
            'div',
            'sca_aff_customer_refer_invite_content',
        )
        content.textContent =
            this.setting.design.refer_customer_invite.popup_description
        this.uiComponents.widget.description = content
        content.style.color =
            this.setting.design.refer_customer_invite.design_color_popup_text
        return content
    }

    renderInviteInputContainer() {
        return this.renderElm('div', 'sca_aff_custom_invite_inputs')
    }

    renderInviteInputAddon() {
        const getInviteLinkButton = this.renderElm(
            'button',
            'sca_aff_customer_refer_invite_button',
        )
        const setting = this.setting.design.refer_customer_invite
        getInviteLinkButton.textContent = setting.button_text_get_invite
        getInviteLinkButton.style.backgroundColor =
            setting.popup_background_color

        getInviteLinkButton.style.color = setting.popup_text_color
        this.uiComponents.widget.getInviteLinkButton = getInviteLinkButton
        return getInviteLinkButton
    }

    renderErrorContainer() {
        const element = this.renderElm('p', 'sca_aff_customer_invite_error')
        this.uiComponents.widget.errorText = element
        return element
    }

    renderShareContainer(inviteLink) {
        inviteLink = encodeURIComponent(inviteLink)
        const container = this.renderElm(
            'div',
            'sca_aff_customer_invite_share_container',
        )
        const facebook = this.renderElm('a', null, {
            href: `https://facebook.com/sharer/sharer.php?u=${inviteLink}`,
            target: '_blank',
            rel: 'nofollow',
        })
        const facebookImage = this.renderElm('img', null, {
            src: 'https://cdn.uppromote.com/storage/uploads/icons/customer-referral/fb.svg',
            alt: 'facebook',
        })
        const twitter = this.renderElm('a', null, {
            href: `https://twitter.com/intent/tweet/?text=&url=${inviteLink}`,
            target: '_blank',
            rel: 'nofollow',
        })
        const twitterImage = this.renderElm('img', null, {
            src: 'https://cdn.uppromote.com/storage/uploads/icons/customer-referral/tw.svg',
            alt: 'X',
        })
        const pinterest = this.renderElm('a', null, {
            href: `https://pinterest.com/pin/create/button/?url=${inviteLink}`,
            target: '_blank',
            rel: 'nofollow',
        })
        const pinterestImage = this.renderElm('img', null, {
            src: 'https://cdn.uppromote.com/storage/uploads/icons/customer-referral/pi.svg',
            alt: 'pinterest',
        })
        const linkedin = this.renderElm('a', null, {
            href: `https://www.linkedin.com/shareArticle?mini=true&url=${inviteLink}&title=&summary=&source=${inviteLink}`,
            target: '_blank',
            rel: 'nofollow',
        })
        const linkedinImage = this.renderElm('img', null, {
            src: 'https://cdn.uppromote.com/storage/uploads/icons/customer-referral/in.svg',
            alt: 'linkedin',
        })
        const reddit = this.renderElm('a', null, {
            href: `https://reddit.com/submit/?url=${inviteLink}`,
            target: '_blank',
            rel: 'nofollow',
        })
        const redditImage = this.renderElm('img', null, {
            src: 'https://cdn.uppromote.com/storage/uploads/icons/customer-referral/redis.svg',
            alt: 'reddit',
        })
        const whatsapp = this.renderElm('a', null, {
            href: `https://api.whatsapp.com/send/?text=${inviteLink}`,
            target: '_blank',
        })
        const whatsappImage = this.renderElm('img', null, {
            src: 'https://cdn.uppromote.com/storage/uploads/icons/customer-referral/whatapp.svg',
            alt: 'whatsapp',
        })
        const mail = this.renderElm('a', null, {
            href: `mailto:?subject=&body=${inviteLink}`,
            target: '_blank',
            rel: 'nofollow',
        })
        const mailImage = this.renderElm('img', null, {
            src: 'https://cdn.uppromote.com/storage/uploads/icons/customer-referral/mail.svg',
            alt: 'mail',
        })
        facebook.append(facebookImage)
        twitter.append(twitterImage)
        pinterest.append(pinterestImage)
        linkedin.append(linkedinImage)
        reddit.append(redditImage)
        whatsapp.append(whatsappImage)
        mail.append(mailImage)
        container.append(
            facebook,
            twitter,
            pinterest,
            linkedin,
            reddit,
            whatsapp,
            mail,
        )
        return container
    }

    renderInviteInput() {
        const input = this.renderElm('input', 'sca_aff_custom_invite_input', {
            type: 'email',
            name: 'sca_customer_refer_email',
            id: 'sca_customer_refer_email',
            placeholder:
                this.setting.design.refer_customer_invite
                    .content_signup_placeholder_text ?? 'Your email address',
        })
        this.uiComponents.widget.inviteEmailInput = input
        return input
    }

    applyDiscountCode() {
        if (this.setting.program.incentive.type !== 'none') {
            const iframe = this.renderElm(
                'iframe',
                'sca_aff_customer_refer_discount_iframe',
            )
            iframe.style.display = 'none'
            const coupon = encodeURIComponent(
                this.setting.program.incentive.coupon,
            )
            iframe.src = `/discount/${coupon}`
            document.body.append(iframe)
        }
    }

    renderShopNowOverlay() {
        const overlay = this.renderElm(
            'div',
            'sca_aff_customer_refer_shop_now_overlay',
        )
        this.uiComponents.shopNow.shopNowOverlayContainer = overlay
        return overlay
    }

    renderShopNowContainer() {
        const container = this.renderElm(
            'div',
            'sca_aff_customer_refer_shop_now_container',
        )
        const setting = this.setting.design.refer_customer_incentive_popup
        container.style.backgroundColor = setting.popup_background_color
        this.uiComponents.shopNow.shopNowContainer = container
        return container
    }

    renderCloseShopNowButton() {
        const button = this.renderElm(
            'button',
            'sca_aff_customer_refer_close_shop_now_button',
            {
                type: 'button',
            },
        )
        button.innerHTML = '&times;'
        this.uiComponents.shopNow.closeShopNowButton = button
        return button
    }

    renderShopNowHeader() {
        const setting = this.setting.design.refer_customer_incentive_popup
        const head = this.renderElm(
            'div',
            'sca_aff_customer_refer_shop_now_header',
        )
        head.textContent = setting.shop_header
        head.style.color = setting.popup_shop_text_color ?? '#000'
        this.uiComponents.shopNow.header = head
        return head
    }

    renderShopNowContent() {
        const setting = this.setting.design.refer_customer_incentive_popup
        const content = this.renderElm(
            'div',
            'sca_aff_customer_refer_shop_now_content',
        )
        content.textContent = setting.shop_description
        content.style.color = setting.popup_shop_text_color ?? '#000'
        this.uiComponents.shopNow.description = content
        return content
    }

    renderShopNowButton() {
        const button = this.renderElm(
            'a',
            'sca_aff_customer_refer_shop_now_button',
            {
                href: `#`,
            },
        )
        const setting = this.setting.design.refer_customer_incentive_popup
        button.innerHTML = setting.shop_button_text
        button.style.backgroundColor = setting.shop_background_color
        button.style.color = setting.shop_text_color
        this.uiComponents.shopNow.shopNowButton = button
        return button
    }
}

const uppromoteCustomerReferral = new UppromoteCustomerReferral({
    env: 'production',
    apiHost: 'track.uppromote.com',
    cdnHost: 'cdn.uppromote.com',

    // env: 'test',
    // apiHost: 'af-test.uppromote.com',
    // cdnHost: 'af-test-2.s3.us-east-1.amazonaws.com',

    // env: 'dev',
    // apiHost: 'secomapp-affiliate.test',
    // cdnHost: 'secomapp-affiliate.test'
})

uppromoteCustomerReferral.initial()
