interface Env {
  ASSETS: {
    fetch(request: Request): Promise<Response>;
  };
}

const CANONICAL_HOST = "www.prolineroofingandsolar.co.uk";

const handler = {
  fetch(request: Request, env: Env): Promise<Response> | Response {
    const url = new URL(request.url);

    if (url.hostname !== CANONICAL_HOST || url.protocol !== "https:") {
      url.hostname = CANONICAL_HOST;
      url.protocol = "https:";
      return Response.redirect(url.toString(), 301);
    }

    return env.ASSETS.fetch(request);
  },
};

export default handler;
