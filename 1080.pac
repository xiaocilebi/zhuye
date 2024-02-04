function FindProxyForURL(url, host) {
  // 如果访问的是yh.achuanai.com网站，使用http代理
  if (shExpMatch(url, "https://yh.achuanai.com/home*")) {
    return "PROXY 18.167.37.103:5555"; // 这里假设你的http代理服务器的地址是18.167.37.103，端口是5555
  }
  // 否则，直接访问
  return "DIRECT";
}
