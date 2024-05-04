export type MessageName =
  | "extensionName"
  | "extensionDescription"
  | "lang"
  | "websiteLocale"
  | "error"
  | "unauthorizedError"
  | "cancelButton"
  | "okButton"
  | "content_singleSiteBlocked"
  | "content_multipleSitesBlocked"
  | "content_showBlockedSitesLink"
  | "content_hideBlockedSitesLink"
  | "content_blockSiteLink"
  | "content_unblockSiteLink"
  | "popup_blockSiteTitle"
  | "popup_unblockSiteTitle"
  | "popup_details"
  | "popup_pageURLLabel"
  | "popup_pathDepth"
  | "popup_pageTitleLabel"
  | "popup_addedRulesLabel"
  | "popup_removedRulesLabel"
  | "popup_blockSiteButton"
  | "popup_unblockSiteButton"
  | "popup_openOptionsLink"
  | "popup_active"
  | "popup_inactive"
  | "popup_activateButton"
  | "options_generalTitle"
  | "options_blacklistLabel"
  | "options_blacklistHelper"
  | "options_blacklistExample"
  | "options_blockByTitle"
  | "options_blacklistUpdated"
  | "options_reloadBlacklistButton"
  | "options_importBlacklistButton"
  | "options_exportBlacklistButton"
  | "options_saveBlacklistButton"
  | "options_importBlacklistDialog_title"
  | "options_importBlacklistDialog_fromFile"
  | "options_importBlacklistDialog_selectFile"
  | "options_importBlacklistDialog_fromPB"
  | "options_importBlacklistDialog_pbLabel"
  | "options_importBlacklistDialog_append"
  | "options_importBlacklistDialog_importButton"
  | "options_importBlacklistDialog_helper"
  | "options_otherSearchEngines"
  | "options_otherSearchEnginesDescription"
  | "options_registerSearchEngine"
  | "options_searchEngineRegistered"
  | "options_skipBlockDialogLabel"
  | "options_hideBlockLinksLabel"
  | "options_hideControlLabel"
  | "options_blockWholeSiteLabel"
  | "options_blockWholeSiteDescription"
  | "options_appearanceTitle"
  | "options_linkColor"
  | "options_blockColor"
  | "options_colorUseDefault"
  | "options_colorSpecify"
  | "options_highlightColors"
  | "options_highlightDescription"
  | "options_highlightColorNth"
  | "options_highlightColorAdd"
  | "options_highlightColorRemove"
  | "options_dialogTheme"
  | "options_dialogThemeDefault"
  | "options_dialogThemeLight"
  | "options_dialogThemeDark"
  | "options_syncTitle"
  | "options_syncFeatureUpdated"
  | "options_syncFeature"
  | "options_syncFeatureDescription"
  | "options_turnOnSync"
  | "options_turnOnSyncDialog_title"
  | "options_turnOnSyncDialog_useAltFlow"
  | "options_turnOnSyncDialog_altFlowDescription"
  | "options_turnOnSyncDialog_altFlowAuthCodeLabel"
  | "options_turnOnSyncDialog_turnOnSyncButton"
  | "options_turnOffSync"
  | "options_syncResult"
  | "options_syncNever"
  | "options_syncRunning"
  | "options_syncReloadButton"
  | "options_syncNowButton"
  | "options_syncCategories"
  | "options_syncBlocklist"
  | "options_syncGeneral"
  | "options_syncAppearance"
  | "options_syncSubscriptions"
  | "options_syncInterval"
  | "options_subscriptionTitle"
  | "options_subscriptionFeature"
  | "options_subscriptionFeatureDescription"
  | "options_addSubscriptionButton"
  | "options_subscriptionNameHeader"
  | "options_subscriptionURLHeader"
  | "options_subscriptionUpdateResultHeader"
  | "options_subscriptionCheckBoxLabel"
  | "options_subscriptionMenuButtonLabel"
  | "options_noSubscriptionsAdded"
  | "options_subscriptionUpdateRunning"
  | "options_showSubscriptionMenu"
  | "options_updateSubscriptionNowMenu"
  | "options_removeSubscriptionMenu"
  | "options_updateAllSubscriptionsNowButton"
  | "options_addSubscriptionDialog_title"
  | "options_addSubscriptionDialog_nameLabel"
  | "options_addSubscriptionDialog_urlLabel"
  | "options_addSubscriptionDialog_addButton"
  | "options_showSubscriptionDialog_blacklistLabel"
  | "options_updateInterval"
  | "options_backupRestoreTitle"
  | "options_backupSettingsLabel"
  | "options_backupSettingsButton"
  | "options_restoreSettingsLabel"
  | "options_restoreSettingsButton"
  | "options_restoreSettingsInvalidFile"
  | "options_initializeSettingsLabel"
  | "options_initializeSettingsButton"
  | "options_initializeSettingsConfirmation"
  | "options_aboutTitle"
  | "options_aboutVersion"
  | "options_aboutDocumentation"
  | "options_aboutReleaseNotes"
  | "options_aboutPrivacyPolicy"
  | "options_aboutThirdPartyNotices"
  | "clouds_googleDriveSync"
  | "clouds_googleDriveSyncDescription"
  | "clouds_googleDriveSyncTurnedOn"
  | "clouds_dropboxSync"
  | "clouds_dropboxSyncDescription"
  | "clouds_dropboxSyncTurnedOn"
  | "searchEngines_googleName"
  | "searchEngines_bingName"
  | "searchEngines_bingDescription_firefox"
  | "searchEngines_braveName"
  | "searchEngines_duckduckgoName"
  | "searchEngines_ecosiaName"
  | "searchEngines_qwantName"
  | "searchEngines_qwantDescription"
  | "searchEngines_searxName"
  | "searchEngines_startpageName"
  | "searchEngines_yahooJapanName"
  | "searchEngines_yandexName";

export type MessageName1 =
  | "error"
  | "content_multipleSitesBlocked"
  | "options_blacklistExample"
  | "options_highlightColorNth"
  | "options_turnOnSyncDialog_altFlowDescription";

export type MessageName0 = Exclude<MessageName, MessageName1>;
