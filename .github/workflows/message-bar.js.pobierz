class UppromoteMessageBar {
    configurations
    setting = {
        referral_enable: 0,
        referral_content: '',
        referral_font: 'Comic+Sans+MS',
        referral_font_size: 22,
        referral_text_color: '#ffffff',
        referral_background_color: '#fc6f6f',
        not_referral_enable: 0,
        not_referral_content: '',
        not_referral_font: 'Coming+Soon',
        not_referral_font_size: 22,
        not_referral_text_color: '#ffffff',
        not_referral_background_color: '#4db8a0',
        customer_referral_program_id: 'MA==',
    }
    uppromoteLoaded = false

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
        if (this.getCookie('uppromote_message_bar_no_setting')) {
            return
        }
        this.loadSetting().then((setting) => {
            if (!('not_referral_enable' in setting)) {
                return;
            }
            if (!setting) return
            this.setting = setting
            this.listenUppromoteEvent()
        })
    }

    async loadSetting() {
        const cdnHost = this.configurations.cdnHost
        const shop = this.getShopDomain()
        if (!shop) return
        const fileName = shop.replaceAll('.myshopify.com', '') + '.json'
        const currentTime = new Date().getTime()
        const settingFolder = () => {
            const absolutePath = 'storage/uploads/message_bar_settings'
            if (this.configurations.env == 'dev') {
                return 'storage/' + absolutePath
            }
            return absolutePath
        }
        try {
            const setting = await fetch(
                `https://${cdnHost}/${settingFolder()}/${fileName}?v=${currentTime}`,
            )
            return setting.json().catch(() => {
                this.setCookie('uppromote_message_bar_no_setting', 1, 1)
            })
        } catch (e) {
            this.setCookie('uppromote_message_bar_no_setting', 1, 1)
            this.logger(e)
            return null
        }
    }

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

    logger(content = '') {
        console.log(
            `%c ► UpPromote Affiliate Marketing [MessageBar Extension] - ${content}`,
            'background-color: #092C4C; color: #fff; padding: 5px;',
        )
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

    setCookie(cName, cValue, exDays) {
        const d = new Date()
        d.setTime(d.getTime() + exDays * 24 * 60 * 60 * 1000)
        let expires = 'expires=' + d.toUTCString()
        document.cookie = cName + '=' + cValue + ';' + expires + ';path=/'
    }

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

    parseQueryStringToObject(queryString = '') {
        try {
            const searchParams = new URLSearchParams(queryString)
            const entries = searchParams.entries()
            const results = {}
            for (const [key, value] of entries) {
                results[key] = value
            }
            return results
        } catch (e) {
            return {}
        }
    }

    isCustomerReferralProgram() {
        if (!!parseInt(this.getCookie('scaaf_is_program_customer') || 0))
            return true
        try {
            const searchQuery = this.parseQueryStringToObject(
                window.location.search,
            )
            const customerReferralProgramId = parseInt(
                this.setting.customer_referral_program_id,
            )
            // noinspection JSUnresolvedVariable
            if (!searchQuery.sca_crp) return false
            const programInQuery = parseInt(atob(searchQuery.sca_crp))
            return programInQuery === customerReferralProgramId
        } catch (e) {
            console.error(e.message)
            return false
        }
    }

    isEnable() {
        return !!this.setting.referral_enable
    }

    getAffiliateInfo() {
        return {
            name: this.getCookie('scaaf_afn') || '',
            first_name: this.getCookie('scaaf_affn') || '',
            company: this.getCookie('scaaf_afc') || '',
            personal_detail: this.getCookie('scaaf_pd') || '',
        }
    }

    injectGoogleFont(fontName) {
        const styleSheetTag = this.renderElm('link', [], {
            href: `https://fonts.googleapis.com/css?family=${fontName}`,
            rel: 'stylesheet',
            type: 'text/css',
        })
        document.head.append(styleSheetTag)
    }

    /**
     * Processor
     */

    listenUppromoteEvent() {
        window.addEventListener('uppromote:loaded', this.onUppromoteLoaded)
        window.addEventListener(
            'uppromote:tracked-affiliate',
            this.onTrackedAffiliate,
        )
    }

    onUppromoteLoaded() {
        uppromoteMessageBar.uppromoteLoaded = true
        setTimeout(() => uppromoteMessageBar.renderMessageBar(), 1e3)
    }

    onTrackedAffiliate() {
        setTimeout(() => uppromoteMessageBar.renderMessageBar(), 1e3)
    }

    renderMessageBar() {
        if (!this.uppromoteLoaded) return
        if (this.isCustomerReferralProgram()) return
        const messageBar = document.querySelector('.scaaf-message-bar')
        if (messageBar) messageBar.remove()
        if (!this.isEnable()) return
        const setting = this.setting
        const affiliateInfo = this.getAffiliateInfo()
        const systemFonts =
            'Arial|Helvetica+Neue|Courier+New|Times+New+Roman|Comic+Sans+MS|Impact'.split(
                '|',
            )
        const renderMessageBarWithAffiliate = () => {
            if (!setting.referral_content) return
            const font = setting.referral_font.replace(/\+/g, ' ').split(':')
            this.injectGoogleFont(setting.referral_font)
            const messageBarContainer = this.renderElm(
                'div',
                'scaaf-message-bar',
            )
            const messageContent = this.renderElm(
                'p',
                'scaaf-message-bar-content',
            )
            messageBarContainer.style.backgroundColor =
                setting.referral_background_color
            messageContent.style.color = setting.referral_text_color
            messageContent.style.fontSize = setting.referral_font_size + 'px'
            messageContent.style.fontFamily = `"${font[0]}", sans-serif`
            messageContent.innerHTML = setting.referral_content
                .replace('{affiliate_name}', affiliateInfo.name)
                .replace('{company}', affiliateInfo.company)
                .replace('{affiliate_firstname}', affiliateInfo.first_name)
                .replace('{personal_detail}', affiliateInfo.personal_detail)
            messageBarContainer.append(messageContent)
            document.body.prepend(messageBarContainer)
        }
        const renderMessageBarWithoutAffiliate = () => {
            if (!setting.not_referral_content) return
            const font = setting.not_referral_font
                .replace(/\+/g, ' ')
                .split(':')
            if (systemFonts.indexOf(setting.not_referral_font) === -1) {
                this.injectGoogleFont(setting.not_referral_font)
            }
            const messageBarContainer = this.renderElm(
                'div',
                'scaaf-message-bar',
            )
            const messageContent = this.renderElm(
                'p',
                'scaaf-message-bar-content',
            )
            messageBarContainer.style.backgroundColor =
                setting.not_referral_background_color
            messageContent.style.color = setting.not_referral_text_color
            messageContent.style.fontSize =
                setting.not_referral_font_size + 'px'
            messageContent.style.fontFamily = `"${font[0]}", sans-serif`
            messageContent.innerHTML = setting.not_referral_content
            messageBarContainer.append(messageContent)
            document.body.prepend(messageBarContainer)
        }
        if (setting.referral_enable === 1) {
            if (affiliateInfo.name) {
                renderMessageBarWithAffiliate()
                return
            }
            if (setting.not_referral_enable === 1) {
                renderMessageBarWithoutAffiliate()
            }
        }
    }
}

const uppromoteMessageBar = new UppromoteMessageBar({
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

uppromoteMessageBar.initial()
