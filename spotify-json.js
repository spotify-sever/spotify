console.log(`spotify-json-2026.04.27-fixed`);
let url = $request.url;
if (url.includes('com:443')) {
    url = url.replace(/com:443/, 'com');
}
if (url.includes('platform=iphone')) {
    url = url.replace(/platform=iphone/, 'platform=ipad');
} else {
    console.log('Không cần thay đổi platform');
}
if (url.includes('&market=from_token')) {
    url = url.replace(/&market=from_token/, '');
}
if (!url.includes('market=')) {
    url = url + (url.includes('?') ? '&' : '?') + 'market=us';
}
$done({url});
// Danh sách function: không có function riêng
