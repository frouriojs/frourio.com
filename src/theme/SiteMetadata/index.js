import Head from '@docusaurus/Head';
import { useLocation } from '@docusaurus/router';
import { PageMetadata, useThemeConfig } from '@docusaurus/theme-common';
import { DEFAULT_SEARCH_TAG, keyboardFocusedClassName } from '@docusaurus/theme-common/internal';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import SearchMetadata from '@theme/SearchMetadata';
import React from 'react';
// TODO move to SiteMetadataDefaults or theme-common ?
// Useful for i18n/SEO
// See https://developers.google.com/search/docs/advanced/crawling/localized-versions
// See https://github.com/facebook/docusaurus/issues/3317
// ==== 2022.09.22 | Modified to add custom link hreflang tag ====
function AlternateLangHeaders() {
  return (
    <Head>
      <link rel="alternate" hrefLang="en" href="https://frourio.com" />
      <link rel="alternate" hrefLang="ja" href="https://ja.frourio.com" />
      <link rel="alternate" hrefLang="x-default" href="https://frourio.com" />
    </Head>
  );
}
// Default canonical url inferred from current page location pathname
function useDefaultCanonicalUrl() {
  const {
    siteConfig: { url: siteUrl },
  } = useDocusaurusContext();
  const { pathname } = useLocation();
  return siteUrl + useBaseUrl(pathname);
}
// TODO move to SiteMetadataDefaults or theme-common ?
function CanonicalUrlHeaders({ permalink }) {
  const {
    siteConfig: { url: siteUrl },
  } = useDocusaurusContext();
  const defaultCanonicalUrl = useDefaultCanonicalUrl();
  const canonicalUrl = permalink ? `${siteUrl}${permalink}` : defaultCanonicalUrl;
  return (
    <Head>
      <meta property="og:url" content={canonicalUrl} />
      <link rel="canonical" href={canonicalUrl} />
    </Head>
  );
}
export default function SiteMetadata() {
  const {
    i18n: { currentLocale },
  } = useDocusaurusContext();
  // TODO maybe move these 2 themeConfig to siteConfig?
  // These seems useful for other themes as well
  const { metadata, image: defaultImage } = useThemeConfig();
  return (
    <>
      <Head>
        <meta name="twitter:card" content="summary_large_image" />
        {/* The keyboard focus class name need to be applied when SSR so links
        are outlined when JS is disabled */}
        <body className={keyboardFocusedClassName} />
      </Head>

      {defaultImage && <PageMetadata image={defaultImage} />}

      <CanonicalUrlHeaders />

      <AlternateLangHeaders />

      <SearchMetadata tag={DEFAULT_SEARCH_TAG} locale={currentLocale} />

      {/*
          It's important to have an additional <Head> element here, as it allows
          react-helmet to override default metadata values set in previous <Head>
          like "twitter:card". In same Head, the same meta would appear twice
          instead of overriding.
        */}
      <Head>
        {/* Yes, "metadatum" is the grammatically correct term */}
        {metadata.map((metadatum, i) => (
          <meta key={i} {...metadatum} />
        ))}
      </Head>
    </>
  );
}
