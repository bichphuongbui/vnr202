export default function VideoPage() {
  return (
    <section className="section video-page reveal">
      <div className="section-inner">
        <h1 className="section-title">Video tóm tắt</h1>
        <p className="section-subtitle">Từ gian khổ đến vinh quang</p>
        <div className="video-frame">
          <video controls preload="metadata" width="100%" style={{ maxWidth: 960, width: '100%', borderRadius: 12 }}>
            <source src="/src/assets/Từ_Gian_Khổ_Đến_Vinh_Quang.mp4" type="video/mp4" />
            Trình duyệt của bạn không hỗ trợ phát video.
          </video>
        </div>
      </div>
    </section>
  )
}

