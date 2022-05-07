import Router from "next/router";

const requireAuth = (page) => {
  // make sure this function is safe run several times
  if (page.__authIsRequired) {
    return;
  }
  page.__authIsRequired = true;

  const originalGetInitialProps = page.getInitialProps;

  page.getInitialProps = async (ctx) => {
    const { res, req } = ctx;

    // httpClient on server side needs to be smart enough to send cookies
    const fetchWithCookies = makeHttpClient(ctx);
    const user = await fetchWithCookies("/api/users/current");

    if (!user) {
      if (res) {
        const loginUrl = `/users/login?redirectTo=${encodeURIComponent(
          req.url
        )}`;
        res.writeHead(302, "Not authenticated", { Location: loginUrl });
        res.end();
      } else {
        const loginUrl = `/users/login?redirectTo=${encodeURIComponent(
          window.location.pathname
        )}`;
        await Router.push(loginUrl);
      }
      return {};
    }

    return originalGetInitialProps ? originalGetInitialProps(ctx) : {};
  };
};

export default requireAuth;
