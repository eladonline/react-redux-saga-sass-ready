import Document, { Head, Main, NextScript } from "next/document";
import flush from "styled-jsx/server";
import { ServerStyleSheet } from "styled-components";
import Helmet from "react-helmet";

export default class MyDocument extends Document {
  static async getInitialProps(...args) {
    const documentProps = await super.getInitialProps(...args);
    const styles = flush();
    return { ...documentProps, helmet: Helmet.renderStatic(), styles };
  }
  // should render on <html>
  get helmetHtmlAttrComponents() {
    return this.props.helmet.htmlAttributes.toComponent();
  }

  // should render on <body>
  get helmetBodyAttrComponents() {
    return this.props.helmet.bodyAttributes.toComponent();
  }

  // should render on <head>
  get helmetHeadComponents() {
    return Object.keys(this.props.helmet)
      .filter(el => el !== "htmlAttributes" && el !== "bodyAttributes")
      .map(el => this.props.helmet[el].toComponent());
  }

  get helmetJsx() {
    return (
      <Helmet
        htmlAttributes={{ lang: "en" }}
        title="Isomorphic"
        meta={[
          { name: "viewport", content: "width=device-width, initial-scale=1" }
        ]}
      />
    );
  }
  render() {
    const sheet = new ServerStyleSheet();
    const main = sheet.collectStyles(<Main />);
    const styleTags = sheet.getStyleElement();
    return (
      <html {...this.helmetHtmlAttrComponents}>
        <Head>
          {this.helmetJsx}
          {this.helmetHeadComponents}
          <style>{`body { margin: 0 }`}</style>
          <link
            rel="stylesheet"
            href="//cdnjs.cloudflare.com/ajax/libs/antd/2.9.3/antd.min.css"
          />
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.1.0/css/all.css"
            integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt"
            crossorigin="anonymous"
          />
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
            integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
            crossorigin="anonymous"
          />
          <link rel="stylesheet" href="/static/css/ionicons.min.css" />
          <link rel="stylesheet" href="/static/css/global.css" />
          <link rel="stylesheet" href="/static/css/fonts.css" />
          <link rel="stylesheet" href="/_next/static/style.css" />

          <link
            rel="stylesheet"
            href="https://unpkg.com/react-instantsearch-theme-algolia@4.0.0/style.min.css"
          />
          <link
            rel="stylesheet"
            href="https://unpkg.com/leaflet@1.2.0/dist/leaflet.css"
            integrity="sha512-M2wvCLH6DSRazYeZRIm1JnYyh22purTM+FDB5CsyxtQJYeKq83arPe5wgbNmcFXGqiSH2XR8dT/fJISVA1r/zQ=="
            crossOrigin=""
            async
          />
          {styleTags}
        </Head>
        <body {...this.helmetBodyAttrComponents}>
          {main}
          <NextScript />
        </body>
      </html>
    );
  }
}
