export default function SongPage() {
  return (
    <section className="section song-page reveal">
      <div className="section-inner">
        <h1 className="section-title">Bài hát cách mạng</h1>
        <p className="section-subtitle">Giai điệu tự hào</p>
        <div className="audio-card">
 
          <audio controls preload="metadata" style={{ width: '100%' }}>
            <source src="/bai-hat-cach-mang.mp3" type="audio/mpeg" />
            Trình duyệt của bạn không hỗ trợ phát audio.
          </audio>
        </div>
        <div className="lyrics">
          <h2>Lời bài hát</h2>
        
          <p className="stanza">
            Ngày đất nước mới giành lấy tự do,<br/>
            Gió ngược chiều, bao gian lao chờ đó.<br/>
            Đêm đói rét, tay người run run,<br/>
            Nhưng tim son sắt – chẳng bao giờ ngừng!
          </p>
          <p className="stanza">
            Một niềm tin sáng lên giữa bão giông,<br/>
            Dưới lá cờ sao vàng rực cháy trong tim.<br/>
            Từng mái nhà, từng ngọn đuốc,<br/>
            Thắp lên lời thề: “Không lùi bước đâu!”
          </p>

          
          <p className="stanza chorus">
            Từ thế ngàn cân treo sợi tóc,<br/>
            Ta viết nên bản hùng ca dân tộc!<br/>
            Đất mẹ gọi, núi sông hòa tiếng hát,<br/>
            “Không có gì quý hơn độc lập, tự do!”<br/>
            Từ gian khó, ta bước tới vinh quang,<br/>
            Điện Biên Phủ – sáng rực trời non nước!<br/>
            Một Việt Nam ngẩng cao giữa năm châu,<br/>
            Rạng ngời niềm tin, niềm kiêu hãnh!
          </p>

         
          <p className="stanza">
            Tổ quốc gọi tên, ta lại bước đi,<br/>
            Giữ trong tim – lời thề bất diệt ấy.<br/>
            Một Việt Nam, mãi mãi rạng ngời,<br/>
            Từ gian khó… đến vinh quang!
          </p>
        </div>
      </div>
    </section>
  )
}

