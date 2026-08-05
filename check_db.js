async function test() {
  const hosts = [
    "id-preview--69f98387-551c-4301-9e08-a8b384c5d4e2.lovable.app",
    "69f98387-551c-4301-9e08-a8b384c5d4e2.lovableproject.com",
    "gpt-oss-120b.lovable.app", // standard project subdomain style
  ];
  const path = "/__l5e/assets-v1/07c730c3-23f9-4655-a367-ac01c0806625/bnl-logo.png";
  for (const host of hosts) {
    const url = `https://${host}${path}`;
    try {
      const res = await fetch(url, { method: "HEAD" });
      console.log(`${host}: status ${res.status} ${res.statusText}`);
    } catch (e) {
      console.log(`${host}: failed with ${e.message}`);
    }
  }
}
test();
