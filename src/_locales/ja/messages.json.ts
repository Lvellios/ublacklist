import { exportAsMessages } from "../helpers.ts";

export default exportAsMessages({
  extensionName: "uBlacklist",
  extensionDescription:
    "指定したサイトが Google の検索結果で表示されないようにします",
  lang: "ja",
  websiteLocale: "ja",
  error: "エラー: $1",
  unauthorizedError:
    "認証が解除されています。同期をオフにして、再度有効にして下さい。",
  cancelButton: "キャンセル",
  okButton: "OK",
  content_singleSiteBlocked: "uBlacklist により 1 サイトがブロックされました",
  content_multipleSitesBlocked:
    "uBlacklist により $1 サイトがブロックされました",
  content_showBlockedSitesLink: "表示する",
  content_hideBlockedSitesLink: "表示しない",
  content_blockSiteLink: "このサイトをブロックする",
  content_unblockSiteLink: "このサイトのブロックを解除する",
  popup_blockSiteTitle: "このサイトをブロックする",
  popup_unblockSiteTitle: "このサイトのブロックを解除する",
  popup_details: "詳細",
  popup_pageURLLabel: "ページの URL",
  popup_pathDepth: "階層",
  popup_pageTitleLabel: "ページのタイトル",
  popup_addedRulesLabel: "追加されるルール",
  popup_removedRulesLabel: "削除されるルール",
  popup_blockSiteButton: "ブロック",
  popup_unblockSiteButton: "ブロックを解除",
  popup_openOptionsLink: "オプション",
  popup_active: "uBlacklist が有効です",
  popup_inactive: "uBlacklist が無効です",
  popup_activateButton: "有効にする",
  options_generalTitle: "一般",
  options_blacklistLabel: "Google の検索結果で表示されないようにするサイト",
  options_blacklistHelper:
    "[マッチパターン](https://developer.mozilla.org/ja/docs/Mozilla/Add-ons/WebExtensions/Match_patterns)か[正規表現](https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Regular_Expressions)が使用できます。",
  options_blacklistExample: "例: $1",
  options_blockByTitle:
    'ページのタイトルでブロックするには、正規表現の前に "title" を追加します。',
  options_blacklistUpdated: "更新されています",
  options_reloadBlacklistButton: "再読み込み",
  options_importBlacklistButton: "インポート",
  options_exportBlacklistButton: "エクスポート",
  options_saveBlacklistButton: "保存",
  options_importBlacklistDialog_title: "インポート",
  options_importBlacklistDialog_fromFile: "ファイルからインポートする",
  options_importBlacklistDialog_selectFile: "ファイルを選択",
  options_importBlacklistDialog_fromPB: "Personal Blocklist からインポートする",
  options_importBlacklistDialog_pbLabel: "ドメインのリスト",
  options_importBlacklistDialog_append: "既存のリストに追加する",
  options_importBlacklistDialog_importButton: "インポート",
  options_importBlacklistDialog_helper:
    "Personal Blocklist からエクスポートしたドメインのリストを貼り付けて下さい。",
  options_otherSearchEngines: "その他の検索エンジン",
  options_otherSearchEnginesDescription:
    "Google 以外の検索エンジンでもこの拡張機能を使用できるようにします。",
  options_registerSearchEngine: "有効にする",
  options_searchEngineRegistered: "有効",
  options_skipBlockDialogLabel:
    "「このサイトをブロックする」ダイアログをスキップする",
  options_hideBlockLinksLabel:
    "「このサイトをブロックする」リンクを非表示にする",
  options_hideControlLabel:
    "ブロックしたサイトの数と「表示する」リンクを非表示にする",
  options_blockWholeSiteLabel: "サイト全体をブロックするルールを追加する",
  options_blockWholeSiteDescription:
    '例えば、ページ "https://a.b.example.uk.com/" をブロックすると、ルール "*://*.example.uk.com/*" が追加されます。',
  options_appearanceTitle: "外観",
  options_linkColor: "リンクの色",
  options_blockColor: "ブロックされた検索結果の色",
  options_colorUseDefault: "デフォルト",
  options_colorSpecify: "カスタム",
  options_highlightColors: "ハイライトされた検索結果の色",
  options_highlightDescription:
    '検索結果を色 N でハイライトするには、ルールの先頭に "@N" を追加します。',
  options_highlightColorNth: "色 $1",
  options_highlightColorAdd: "追加",
  options_highlightColorRemove: "削除",
  options_dialogTheme: "「このサイトをブロックする」ダイアログのテーマ",
  options_dialogThemeDefault: "デフォルト",
  options_dialogThemeLight: "ライト",
  options_dialogThemeDark: "ダーク",
  options_syncTitle: "同期",
  options_syncFeatureUpdated:
    "同期機能がアップデートされました。引き続き同期を使用するには、「同期を有効にする」ボタンを押して下さい。",
  options_syncFeature: "クラウドと同期する",
  options_syncFeatureDescription:
    "クラウドを通して、複数の端末でブラックリストを同期することができます。",
  options_turnOnSync: "同期を有効にする",
  options_turnOnSyncDialog_title: "同期を有効にする",
  options_turnOnSyncDialog_turnOnSyncButton: "有効にする",
  options_turnOnSyncDialog_useAltFlow: "新しいタブで認証ページを開く",
  options_turnOnSyncDialog_altFlowDescription:
    "認証中に $1 へのアクセス権限が求められることがありますが、個人情報がこのドメインに保存されることはありません。",
  options_turnOnSyncDialog_altFlowAuthCodeLabel: "認証コード",
  options_turnOffSync: "オフにする",
  options_syncResult: "最後の同期",
  options_syncNever: "まだ同期されていません",
  options_syncRunning: "同期中...",
  options_syncReloadButton: "再読み込み",
  options_syncNowButton: "今すぐ同期",
  options_syncCategories: "同期する項目",
  options_syncBlocklist: "ブロックするサイト",
  options_syncGeneral: "一般設定",
  options_syncAppearance: "外観",
  options_syncSubscriptions: "購読",
  options_syncInterval: "同期の間隔",
  options_subscriptionTitle: "購読",
  options_subscriptionFeature: "ブラックリストを購読する",
  options_subscriptionFeatureDescription:
    "購読を追加すると、指定した URL から定期的にブラックリストがダウンロードされます。",
  options_addSubscriptionButton: "購読を追加する",
  options_subscriptionNameHeader: "名前",
  options_subscriptionURLHeader: "URL",
  options_subscriptionUpdateResultHeader: "最後の更新",
  options_subscriptionCheckBoxLabel: "有効",
  options_subscriptionMenuButtonLabel: "メニュー",
  options_noSubscriptionsAdded: "購読が追加されていません",
  options_subscriptionUpdateRunning: "更新中...",
  options_showSubscriptionMenu: "表示",
  options_updateSubscriptionNowMenu: "今すぐ更新",
  options_removeSubscriptionMenu: "削除",
  options_updateAllSubscriptionsNowButton: "今すぐ更新",
  options_addSubscriptionDialog_title: "購読を追加する",
  options_addSubscriptionDialog_nameLabel: "名前",
  options_addSubscriptionDialog_urlLabel: "URL",
  options_addSubscriptionDialog_addButton: "追加",
  options_showSubscriptionDialog_blacklistLabel: "ルールのリスト",
  options_updateInterval: "更新の間隔",
  options_backupRestoreTitle: "バックアップと復元",
  options_backupSettingsLabel: "設定をバックアップする",
  options_backupSettingsButton: "バックアップ",
  options_restoreSettingsLabel: "設定を復元する",
  options_restoreSettingsButton: "復元",
  options_restoreSettingsInvalidFile: "無効なファイル形式です",
  options_initializeSettingsLabel: "設定を初期化する",
  options_initializeSettingsButton: "初期化",
  options_initializeSettingsConfirmation: "本当に設定を初期化しますか?",
  options_aboutTitle: "uBlacklist について",
  options_aboutVersion: "バージョン",
  options_aboutDocumentation: "ドキュメント",
  options_aboutReleaseNotes: "リリースノート",
  options_aboutPrivacyPolicy: "プライバシーポリシー",
  options_aboutThirdPartyNotices: "サードパーティに関する通知",
  searchEngines_bingDescription_firefox:
    "「新しいタブまたはウィンドウに検索結果のリンク先を開きます」を無効にして下さい。",
  searchEngines_qwantDescription:
    '"Always play videos on Qwant.com" を無効にして下さい。',
  clouds_googleDriveSync: "Google ドライブと同期する",
  clouds_googleDriveSyncDescription:
    "非表示のアプリデータフォルダにファイルが作成されます。",
  clouds_googleDriveSyncTurnedOn: "Google ドライブと同期しています",
  clouds_dropboxSync: "Dropbox と同期する",
  clouds_dropboxSyncDescription:
    'フォルダ "/アプリ/uBlacklist/" にファイルが作成されます。',
  clouds_dropboxSyncTurnedOn: "Dropbox と同期しています",
});
