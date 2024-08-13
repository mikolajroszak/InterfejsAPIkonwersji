function manageChatStateBasedOnCurrentSettings(
  currentData,
  previousSettings,
  currentSettings,
) {
  Object.keys(currentSettings).forEach(key => {
    if (previousSettings[key] !== currentSettings[key]) {
      settingChanged(key, currentSettings[key], currentData);
    }
  });
}

function settingChanged(key, value, currentData) {
  switch (key) {
    case 'icon':
    case 'text':
      localStorage.setItem(
        'shopifyChatData',
        JSON.stringify({...currentData, isOpen: false}),
      );
      break;
    case 'greetingMessage':
      localStorage.setItem(
        'shopifyChatData',
        JSON.stringify({
          ...currentData,
          conversationId: null,
          sessionId: null,
          hasSentCustomerInfo: false,
          isOpen: true,
        }),
      );
      break;
  }
}

(function load() {
  const chatButton = document.getElementById('chat-button-container');
  const chatSettings = chatButton.dataset;
  const buttonHorizontalPosition = chatButton.getAttribute(
    'data-horizontal-position',
  );
  const buttonVerticalPosition = chatButton.getAttribute(
    'data-vertical-position',
  );
  const buttonIcon = chatButton.getAttribute('data-icon');
  const buttonText = chatButton.getAttribute('data-text');
  const buttonColor = encodeURIComponent(chatButton.getAttribute('data-color'));
  const buttonSecondaryColor = encodeURIComponent(
    chatButton.getAttribute('data-secondary-color'),
  );
  const buttonTernaryColor = encodeURIComponent(
    chatButton.getAttribute('data-ternary-color'),
  );
  const shopDomain = chatButton.getAttribute('data-domain');
  const externalIdentifier = chatButton.getAttribute(
    'data-external-identifier',
  );

  if (Shopify.designMode) {
    const chatPreviewJSON =
      sessionStorage.getItem('chatPreview') || JSON.stringify({});
    const previousSettings = JSON.parse(chatPreviewJSON);
    sessionStorage.setItem('chatPreview', JSON.stringify(chatSettings));

    const currentData =
      JSON.parse(localStorage.getItem('shopifyChatData')) || {};
    manageChatStateBasedOnCurrentSettings(
      currentData,
      previousSettings,
      chatSettings,
    );
  }

  const src = document.currentScript.src;
  const script = document.createElement('script');

  const chatSrc = `shopifyChatV1Widget.js?button_color=${buttonColor}&sc=${buttonSecondaryColor}&tc=${buttonTernaryColor}&i=${buttonIcon}&t=${buttonText}&p=${buttonHorizontalPosition}&vp=${buttonVerticalPosition}&shop_id=${externalIdentifier}&shop=${shopDomain}`;
  const indexSrc = src.replace('inbox-chat-loader.js', chatSrc);

  script.src = indexSrc;
  script.type = 'module';
  script.defer = true;
  script.async = true;

  chatButton.parentNode.appendChild(script);
})();
