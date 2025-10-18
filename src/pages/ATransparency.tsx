//

export default function ATransparency() {
  return (
    <main id="ai" className="section ai-page">
      <div className="section-inner">
        <h1 className="section-title">Minh bạch AI (AI Transparency)</h1>
        <p className="section-subtitle">Cách Nhóm 18 sử dụng AI trong dự án “Từ gian khổ đến vinh quang”.</p>

        {/* 4.1 Minh bạch */}
        <section className="ai-section reveal">
          <h2 className="ai-h2">4.1 Minh bạch</h2>
          <p className="ai-note">Tất cả nội dung được AI hỗ trợ đều được nhóm biên tập, chỉnh sửa, kiểm chứng trước khi sử dụng.</p>
          <div className="ai-table-wrap">
            <table className="ai-table" aria-label="Bảng AI Usage">
              <thead>
                <tr>
                  <th>Công cụ / Nền tảng</th>
                  <th>Mục đích sử dụng</th>
                  <th>Prompt chính</th>
                  <th>Kết quả tạo ra</th>
                  <th>Phần chỉnh sửa của sinh viên</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-label="Công cụ / Nền tảng">Cursor + API Chatbot</td>
                  <td data-label="Mục đích sử dụng">Tạo chatbot hỏi đáp về chủ đề lịch sử (1945–1954)</td>
                  <td data-label="Prompt chính">“Generate Q&A about Vietnam’s revolution”</td>
                  <td data-label="Kết quả tạo ra">Gợi ý câu hỏi, phản hồi tự động</td>
                  <td data-label="Phần chỉnh sửa của sinh viên">Sinh viên biên tập, bổ sung dữ kiện, kiểm chứng theo giáo trình LLCT</td>
                </tr>
                <tr>
                  <td data-label="Công cụ / Nền tảng">Luma AI (API)</td>
                  <td data-label="Mục đích sử dụng">Tạo hình ảnh minh họa & hiệu ứng video</td>
                  <td data-label="Prompt chính">“Generate cinematic 1945–1954 scenes”</td>
                  <td data-label="Kết quả tạo ra">Video nền và cảnh minh họa</td>
                  <td data-label="Phần chỉnh sửa của sinh viên">Sinh viên chọn cảnh, thêm thuyết minh</td>
                </tr>
                <tr>
                  <td data-label="Công cụ / Nền tảng">NotebookLM (Google)</td>
                  <td data-label="Mục đích sử dụng">Tổng hợp & tóm tắt nội dung bài thuyết trình</td>
                  <td data-label="Prompt chính">“Summarize and visualize Vietnam’s revolution (1945–1954)”</td>
                  <td data-label="Kết quả tạo ra">Video tóm tắt 2–3 phút</td>
                  <td data-label="Phần chỉnh sửa của sinh viên">Sinh viên kiểm tra nội dung, hiệu chỉnh lời dẫn</td>
                </tr>
                <tr>
                  <td data-label="Công cụ / Nền tảng">ChatGPT (OpenAI)</td>
                  <td data-label="Mục đích sử dụng">Hỗ trợ ý tưởng, soạn quiz, gợi ý cấu trúc web</td>
                  <td data-label="Prompt chính">“Create quiz + presentation structure for history project”</td>
                  <td data-label="Kết quả tạo ra">Gợi ý outline, câu hỏi, nội dung</td>
                  <td data-label="Phần chỉnh sửa của sinh viên">Sinh viên biên tập, xác minh và trình bày lại bằng ngôn ngữ riêng</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 4.2 Có trách nhiệm */}
        <section className="ai-section reveal">
          <h2 className="ai-h2">4.2 Có trách nhiệm</h2>
          <ul className="ai-bullets">
            <li>Đối chiếu với giáo trình LLCT, nghị quyết, văn bản chính thống (Ban Tuyên giáo, Bộ GD&ĐT, Hồ Chí Minh Toàn tập,...).</li>
            <li>Chịu trách nhiệm về tính chính xác của nội dung cuối cùng.</li>
          </ul>
          <blockquote className="ai-quote">“Nhóm 18 cam kết toàn bộ nội dung được kiểm chứng và biên tập lại dựa trên nguồn chính thống, đảm bảo tính học thuật và trung thực.”</blockquote>
        </section>

        {/* 4.3 Sáng tạo */}
        <section className="ai-section reveal">
          <h2 className="ai-h2">4.3 Sáng tạo</h2>
          <ul className="ai-bullets">
            <li>AI hỗ trợ kỹ thuật: sơ đồ tư duy, slide, quiz, chatbot, video, bài hát.</li>
            <li>Phân tích, tổng hợp, đánh giá, kết luận: do sinh viên tự biên soạn.</li>
          </ul>
          <p className="ai-note">“AI là công cụ, không phải người thay thế tư duy.”</p>
        </section>

        {/* 4.4 Liêm chính học thuật */}
        <section className="ai-section reveal">
          <h2 className="ai-h2">4.4 Liêm chính học thuật</h2>
          <ul className="ai-bullets">
            <li>Cam kết: “Không để AI thay thế toàn bộ nội dung của sinh viên.”</li>
            <li>Phân biệt: gắn <span className="ai-chip">(AI hỗ trợ)</span> và <span className="ai-chip alt">(Chỉnh sửa bởi nhóm 18)</span>.</li>
            <li>Đối chiếu nguồn: trích dẫn tài liệu LLCT, giáo trình, nghị quyết, văn bản chính thống.</li>
          </ul>
          <p className="ai-footer">“Chúng tôi tin rằng sự kết hợp giữa AI và tư duy con người không chỉ giúp học tập hiệu quả hơn, mà còn tôn trọng sự trung thực và sáng tạo trong nghiên cứu khoa học.”</p>
          <div className="ai-brand">
            <span className="brand-mark" aria-hidden>★</span>
            <span className="brand-text">Nhóm 18</span>
          </div>
        </section>
      </div>
    </main>
  )
}


