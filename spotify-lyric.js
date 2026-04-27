// ... (giữ nguyên phần đầu đến const options)
// Thêm vào trong callback của commonApi.post, sau if(error) và if(response.status !==200), trước khi xử lý baiduResult:
if(baiduResult.error_code && baiduResult.error_code !== '52000'){
    console.log(`Bypass: Baidu lỗi ${baiduResult.error_code}, giữ nguyên lyrics gốc`);
    $done({});
} else {
    // ... phần xử lý thành công
}
// Danh sách function trong file: Env, TextDecoder, TextEncoder, MD5, ColorLyricsResponse, LyricsResponse, LyricsLine, Alternative, ...