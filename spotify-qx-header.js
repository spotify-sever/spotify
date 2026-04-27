let headers = $request.headers;
delete headers['If-None-Match'];
delete headers['If-Modified-Since'];
delete headers['Cache-Control'];
delete headers['Pragma'];
headers['Cache-Control'] = 'no-cache, no-store, must-revalidate';
headers['Pragma'] = 'no-cache';
headers['x-spotify-bypass'] = 'premium_fixed';
console.log('2026.04.27-spotify-header-fixed xóa cache headers');
$done({headers});
// Danh sách function: không có