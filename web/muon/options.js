
export function configureAppOptions(metadata) {

  window.PDFViewerApplicationOptions.set("defaultUrl", `${metadata.settings.providers.url}?data=${metadata.data}`)

  window.PDFViewerApplicationOptions.set("forcePageColors", true)
  //window.PDFViewerApplicationOptions.set("disableFontFace", true)
  window.PDFViewerApplicationOptions.set("pageColorsForeground", "#c3c3c6")
  window.PDFViewerApplicationOptions.set("pageColorsBackground", "#353538")
}
