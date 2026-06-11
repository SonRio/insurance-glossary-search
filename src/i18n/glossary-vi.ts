/** Vietnamese translations for the glossary, keyed by the English term id.
 *  Insurance terminology reviewed for accuracy. */
export const GLOSSARY_VI: Record<string, { name: string; definition: string; shortDefinition: string }> = {
  // ─── Bảo hiểm chung ─────────────────────────────────────────────────
  premium: {
    name: 'Phí bảo hiểm',
    definition:
      'Khoản tiền mà bên mua bảo hiểm trả cho doanh nghiệp bảo hiểm để đổi lấy sự bảo vệ theo hợp đồng. Phí có thể đóng một lần hoặc theo định kỳ (tháng, quý, năm) và được tính dựa trên mức độ rủi ro đã được đánh giá.',
    shortDefinition: 'Khoản tiền người mua trả cho công ty bảo hiểm để được bảo vệ.',
  },
  policyholder: {
    name: 'Bên mua bảo hiểm',
    definition:
      'Cá nhân hoặc tổ chức đứng tên sở hữu hợp đồng bảo hiểm và có trách nhiệm đóng phí bảo hiểm. Bên mua bảo hiểm không nhất thiết là người được bảo hiểm.',
    shortDefinition: 'Người đứng tên hợp đồng và đóng phí bảo hiểm.',
  },
  insured: {
    name: 'Người được bảo hiểm',
    definition:
      'Người hoặc tài sản có tính mạng, sức khỏe hoặc tài sản được hợp đồng bảo vệ. Đây là đối tượng chịu rủi ro được bảo hiểm, và có thể khác với bên mua bảo hiểm là người đứng tên hợp đồng.',
    shortDefinition: 'Người hoặc tài sản mà hợp đồng thực sự bảo vệ.',
  },
  policy: {
    name: 'Hợp đồng bảo hiểm',
    definition:
      'Hợp đồng pháp lý giữa doanh nghiệp bảo hiểm và bên mua bảo hiểm. Hợp đồng quy định phạm vi bảo hiểm, các hạn mức, điểm loại trừ, phí bảo hiểm và nghĩa vụ của mỗi bên.',
    shortDefinition: 'Hợp đồng quy định những gì công ty bảo hiểm sẽ chi trả.',
  },
  underwriting: {
    name: 'Thẩm định bảo hiểm',
    definition:
      'Quy trình doanh nghiệp bảo hiểm đánh giá rủi ro của việc bảo hiểm cho một người hoặc tài sản, từ đó quyết định có nhận bảo hiểm hay không và với điều kiện nào. Người thẩm định dựa vào dữ liệu, bảng tính toán của chuyên viên định phí và các quy tắc để ấn định mức phí.',
    shortDefinition: 'Đánh giá rủi ro để quyết định điều kiện và mức phí bảo hiểm.',
  },
  endorsement: {
    name: 'Sửa đổi bổ sung',
    definition:
      'Văn bản sửa đổi đính kèm hợp đồng nhằm thêm, bớt hoặc thay đổi phạm vi bảo hiểm. Sau khi được ban hành, nó trở thành một phần ràng buộc pháp lý của hợp đồng.',
    shortDefinition: 'Văn bản thay đổi một hợp đồng bảo hiểm đang có.',
  },
  rider: {
    name: 'Điều khoản bổ sung',
    definition:
      'Phần quyền lợi tự chọn gắn thêm vào hợp đồng chính, cung cấp các quyền lợi bổ sung khi đóng thêm phí. Ví dụ phổ biến là điều khoản bổ sung về bệnh hiểm nghèo và tử vong do tai nạn.',
    shortDefinition: 'Phần thêm tự chọn cho quyền lợi bổ sung khi đóng thêm phí.',
  },
  indemnity: {
    name: 'Bồi thường (nguyên tắc bồi thường)',
    definition:
      'Nguyên tắc theo đó bảo hiểm chỉ khôi phục người được bảo hiểm về đúng tình trạng tài chính ngay trước khi xảy ra tổn thất, không hơn cũng không kém. Đây là nền tảng của hầu hết các hợp đồng bảo hiểm tài sản và trách nhiệm.',
    shortDefinition: 'Khôi phục bạn về đúng tình trạng trước tổn thất, không hơn.',
  },
  'insurable-interest': {
    name: 'Quyền lợi có thể được bảo hiểm',
    definition:
      'Lợi ích tài chính thực sự đối với người hoặc tài sản được bảo hiểm, sao cho bên mua bảo hiểm sẽ chịu tổn thất thật nếu sự kiện được bảo hiểm xảy ra. Quyền lợi này phải tồn tại thì hợp đồng mới có hiệu lực, nhằm ngăn bảo hiểm trở thành một hình thức cá cược.',
    shortDefinition: 'Lợi ích tài chính thực sự đối với đối tượng được bảo hiểm.',
  },
  broker: {
    name: 'Môi giới bảo hiểm',
    definition:
      'Bên trung gian đại diện cho người mua, so sánh các sản phẩm bảo hiểm của nhiều doanh nghiệp để tìm ra phạm vi bảo hiểm phù hợp. Môi giới thường được trả thù lao bằng hoa hồng hoặc phí dịch vụ.',
    shortDefinition: 'Bên trung gian so sánh nhiều công ty bảo hiểm giúp người mua.',
  },
  agent: {
    name: 'Đại lý bảo hiểm',
    definition:
      'Người đại diện bán và phục vụ các hợp đồng bảo hiểm thay mặt cho một hoặc nhiều doanh nghiệp bảo hiểm. Khác với môi giới, đại lý đại diện cho doanh nghiệp bảo hiểm chứ không phải cho khách hàng.',
    shortDefinition: 'Người bán hợp đồng thay mặt cho công ty bảo hiểm.',
  },

  // ─── Bồi thường ─────────────────────────────────────────────────────
  claim: {
    name: 'Yêu cầu bồi thường',
    definition:
      'Đề nghị chính thức của bên mua bảo hiểm yêu cầu doanh nghiệp bảo hiểm chi trả cho một tổn thất hoặc sự kiện thuộc phạm vi bảo hiểm. Doanh nghiệp sẽ đối chiếu yêu cầu với các điều khoản hợp đồng trước khi quyết định chi trả.',
    shortDefinition: 'Đề nghị yêu cầu công ty bảo hiểm chi trả cho một tổn thất.',
  },
  deductible: {
    name: 'Mức miễn thường',
    definition:
      'Khoản tiền cố định mà người được bảo hiểm phải tự chi trả trước khi doanh nghiệp bảo hiểm bắt đầu chi trả cho yêu cầu bồi thường. Chọn mức miễn thường cao hơn thường giúp giảm phí bảo hiểm.',
    shortDefinition: 'Phần bạn tự trả trước khi bảo hiểm bắt đầu chi trả.',
  },
  copay: {
    name: 'Khoản đồng chi trả cố định',
    definition:
      'Khoản tiền cố định người được bảo hiểm trả cho mỗi dịch vụ thuộc phạm vi bảo hiểm, ví dụ 20 USD cho mỗi lần khám bác sĩ, phần còn lại do doanh nghiệp bảo hiểm chi trả. Hình thức này phổ biến trong bảo hiểm sức khỏe.',
    shortDefinition: 'Khoản cố định bạn trả cho mỗi dịch vụ được bảo hiểm.',
  },
  coinsurance: {
    name: 'Đồng bảo hiểm',
    definition:
      'Phần chi phí thuộc phạm vi bảo hiểm mà người được bảo hiểm cùng gánh chịu sau khi đã đạt mức miễn thường, được tính theo tỷ lệ phần trăm. Ví dụ doanh nghiệp bảo hiểm trả 80% và người được bảo hiểm trả 20%.',
    shortDefinition: 'Tỷ lệ phần trăm chi phí bạn cùng chịu sau mức miễn thường.',
  },
  adjudication: {
    name: 'Xét duyệt bồi thường',
    definition:
      'Quy trình doanh nghiệp bảo hiểm xem xét một yêu cầu bồi thường đã nộp để quyết định có chi trả hay không và chi trả bao nhiêu, dựa trên các điều khoản hợp đồng và chứng từ kèm theo.',
    shortDefinition: 'Xem xét yêu cầu để quyết định có trả và trả bao nhiêu.',
  },
  subrogation: {
    name: 'Thế quyền',
    definition:
      'Quyền của doanh nghiệp bảo hiểm, sau khi đã chi trả bồi thường, được truy đòi bên thứ ba gây ra tổn thất để thu hồi số tiền đã trả. Cơ chế này ngăn người được bảo hiểm nhận bồi thường hai lần cho cùng một tổn thất.',
    shortDefinition: 'Bảo hiểm đòi lại tiền đã trả từ bên gây ra tổn thất.',
  },
  'claims-adjuster': {
    name: 'Giám định viên bồi thường',
    definition:
      'Người chuyên trách điều tra một yêu cầu bồi thường, đánh giá mức độ trách nhiệm của doanh nghiệp bảo hiểm và đề xuất số tiền giải quyết bồi thường.',
    shortDefinition: 'Người điều tra yêu cầu và xác định số tiền bồi thường.',
  },
  'proof-of-loss': {
    name: 'Chứng từ tổn thất',
    definition:
      'Bản kê khai chính thức, thường có cam kết của người được bảo hiểm, ghi nhận chi tiết và giá trị của tổn thất. Doanh nghiệp bảo hiểm yêu cầu chứng từ này để xử lý một số loại bồi thường.',
    shortDefinition: 'Bản kê khai có cam kết ghi nhận tổn thất và giá trị của nó.',
  },
  'out-of-pocket-maximum': {
    name: 'Mức chi tối đa tự trả',
    definition:
      'Số tiền tối đa mà người được bảo hiểm phải tự chi trả cho các dịch vụ thuộc phạm vi bảo hiểm trong một thời hạn hợp đồng. Khi đạt đến mức này, doanh nghiệp bảo hiểm sẽ chi trả 100% các chi phí thuộc phạm vi bảo hiểm tiếp theo.',
    shortDefinition: 'Giới hạn số tiền bạn tự trả trước khi được chi trả toàn bộ.',
  },
  salvage: {
    name: 'Tài sản tận thu',
    definition:
      'Phần giá trị còn lại của tài sản bị hư hỏng sau tổn thất, mà doanh nghiệp bảo hiểm có thể tiếp nhận và bán đi để bù đắp khoản đã chi trả bồi thường. Ví dụ điển hình là một chiếc xe đã bị bồi thường toàn bộ.',
    shortDefinition: 'Giá trị còn lại của tài sản hư hỏng mà bảo hiểm bán thu hồi.',
  },

  // ─── Phạm vi bảo hiểm ───────────────────────────────────────────────
  'sum-insured': {
    name: 'Số tiền bảo hiểm',
    definition:
      'Số tiền tối đa doanh nghiệp bảo hiểm chi trả cho một tổn thất thuộc phạm vi bảo hiểm theo hợp đồng. Khái niệm này còn được gọi là hạn mức bảo hiểm, hoặc số tiền bảo hiểm trong bảo hiểm nhân thọ.',
    shortDefinition: 'Số tiền tối đa mà hợp đồng có thể chi trả.',
  },
  'annual-limit': {
    name: 'Hạn mức năm',
    definition:
      'Tổng số tiền tối đa doanh nghiệp bảo hiểm chi trả cho các yêu cầu bồi thường thuộc phạm vi bảo hiểm trong một năm hợp đồng, bất kể có bao nhiêu yêu cầu bồi thường được nộp.',
    shortDefinition: 'Số tiền tối đa bảo hiểm trả trong một năm hợp đồng.',
  },
  'sub-limit': {
    name: 'Hạn mức phụ',
    definition:
      'Một giới hạn nằm trong tổng số tiền bảo hiểm, áp dụng riêng cho một nhóm yêu cầu bồi thường cụ thể. Ví dụ hạn mức phụ cho tiền phòng hoặc cho quyền lợi thai sản.',
    shortDefinition: 'Hạn mức nhỏ hơn cho một loại bồi thường cụ thể.',
  },
  exclusion: {
    name: 'Điểm loại trừ',
    definition:
      'Điều kiện, sự kiện hoặc hạng mục mà hợp đồng quy định rõ là không được bảo hiểm. Đọc kỹ các điểm loại trừ là điều thiết yếu để hiểu hợp đồng thực sự bảo vệ những gì.',
    shortDefinition: 'Điều mà hợp đồng quy định rõ là không chi trả.',
  },
  'waiting-period': {
    name: 'Thời gian chờ',
    definition:
      'Khoảng thời gian xác định sau khi hợp đồng có hiệu lực mà trong đó một số quyền lợi chưa được chi trả. Thời gian chờ thường áp dụng cho quyền lợi thai sản, bệnh có sẵn hoặc một số phương pháp điều trị nhất định.',
    shortDefinition: 'Thời gian sau khi bắt đầu mà một số quyền lợi chưa được trả.',
  },
  'pre-existing-condition': {
    name: 'Bệnh có sẵn',
    definition:
      'Tình trạng sức khỏe đã tồn tại trước ngày hợp đồng có hiệu lực. Doanh nghiệp bảo hiểm có thể loại trừ, áp dụng thời gian chờ, hoặc nhận bảo hiểm theo các điều kiện riêng.',
    shortDefinition: 'Vấn đề sức khỏe bạn đã có trước khi hợp đồng bắt đầu.',
  },
  'grace-period': {
    name: 'Thời gian gia hạn đóng phí',
    definition:
      'Khoảng thời gian ngắn sau ngày đến hạn đóng phí mà hợp đồng vẫn duy trì hiệu lực dù phí được đóng trễ. Bỏ lỡ thời gian này có thể khiến hợp đồng mất hiệu lực.',
    shortDefinition: 'Thời gian thêm để đóng phí trễ trước khi mất hiệu lực.',
  },
  lapse: {
    name: 'Mất hiệu lực hợp đồng',
    definition:
      'Việc hợp đồng chấm dứt do phí bảo hiểm không được đóng trong thời gian gia hạn, dẫn đến kết thúc phạm vi bảo hiểm.',
    shortDefinition: 'Hợp đồng chấm dứt vì phí bảo hiểm không được đóng.',
  },
  coverage: {
    name: 'Phạm vi bảo hiểm',
    definition:
      'Mức độ bảo vệ mà hợp đồng cung cấp, tức là những rủi ro, sự kiện và tổn thất mà hợp đồng sẽ chi trả, trong giới hạn của các hạn mức và điểm loại trừ.',
    shortDefinition: 'Tập hợp các rủi ro và tổn thất mà hợp đồng sẽ chi trả.',
  },
  benefit: {
    name: 'Quyền lợi bảo hiểm',
    definition:
      'Khoản chi trả hoặc dịch vụ mà doanh nghiệp bảo hiểm cung cấp cho người được bảo hiểm hoặc người thụ hưởng khi sự kiện được bảo hiểm xảy ra.',
    shortDefinition: 'Khoản chi trả hoặc dịch vụ được trả khi có sự kiện bảo hiểm.',
  },
  network: {
    name: 'Mạng lưới cơ sở y tế',
    definition:
      'Nhóm bác sĩ, bệnh viện và cơ sở cung cấp dịch vụ đã ký hợp đồng với doanh nghiệp bảo hiểm sức khỏe để cung cấp dịch vụ theo mức giá đã thỏa thuận. Sử dụng dịch vụ trong mạng lưới giúp giảm chi phí cho người được bảo hiểm.',
    shortDefinition: 'Các cơ sở y tế liên kết cung cấp dịch vụ với giá ưu đãi.',
  },

  // ─── Nhân thọ & Sức khỏe ────────────────────────────────────────────
  beneficiary: {
    name: 'Người thụ hưởng',
    definition:
      'Cá nhân hoặc tổ chức được chỉ định nhận khoản chi trả của hợp đồng, tức là quyền lợi tử vong, khi người được bảo hiểm qua đời.',
    shortDefinition: 'Người nhận tiền chi trả khi người được bảo hiểm qua đời.',
  },
  maturity: {
    name: 'Đáo hạn',
    definition:
      'Thời điểm hợp đồng bảo hiểm nhân thọ hoặc hỗn hợp kết thúc thời hạn và chi trả quyền lợi đáo hạn cho bên mua bảo hiểm còn sống.',
    shortDefinition: 'Khi hợp đồng kết thúc và chi trả cho người còn sống.',
  },
  'surrender-value': {
    name: 'Giá trị hoàn lại',
    definition:
      'Số tiền mặt mà bên mua bảo hiểm nhận được nếu tự nguyện chấm dứt hợp đồng nhân thọ có giá trị tiền mặt trước khi đáo hạn, sau khi đã trừ các khoản khấu trừ áp dụng.',
    shortDefinition: 'Tiền nhận lại khi chấm dứt hợp đồng nhân thọ sớm.',
  },
  'mortality-table': {
    name: 'Bảng tỷ lệ tử vong',
    definition:
      'Bảng thống kê thể hiện xác suất tử vong ở từng độ tuổi. Chuyên viên định phí sử dụng bảng này để tính phí bảo hiểm nhân thọ và xác lập các khoản dự phòng.',
    shortDefinition: 'Bảng xác suất tử vong theo độ tuổi dùng để tính phí.',
  },
  actuarial: {
    name: 'Định phí bảo hiểm',
    definition:
      'Liên quan đến các phương pháp toán học và thống kê được dùng để đánh giá rủi ro, ấn định phí bảo hiểm và tính toán dự phòng trong lĩnh vực bảo hiểm và hưu trí.',
    shortDefinition: 'Phương pháp toán và thống kê dùng để định giá rủi ro bảo hiểm.',
  },
  actuary: {
    name: 'Chuyên viên định phí',
    definition:
      'Người chuyên áp dụng toán học, thống kê và lý thuyết tài chính để đo lường và định giá rủi ro cho doanh nghiệp bảo hiểm và quỹ hưu trí.',
    shortDefinition: 'Chuyên gia đo lường và định giá rủi ro bảo hiểm.',
  },
  'term-life': {
    name: 'Bảo hiểm tử kỳ',
    definition:
      'Loại bảo hiểm nhân thọ bảo vệ người được bảo hiểm trong một thời hạn cố định và chỉ chi trả quyền lợi tử vong nếu họ qua đời trong thời hạn đó. Sản phẩm này không hình thành giá trị tiền mặt.',
    shortDefinition: 'Bảo hiểm nhân thọ có thời hạn cố định, không tích lũy tiền.',
  },
  'whole-life': {
    name: 'Bảo hiểm trọn đời',
    definition:
      'Loại bảo hiểm nhân thọ vĩnh viễn bảo vệ người được bảo hiểm suốt đời và tích lũy giá trị tiền mặt theo thời gian, đi kèm quyền lợi tử vong được bảo đảm.',
    shortDefinition: 'Bảo hiểm nhân thọ suốt đời, có tích lũy giá trị tiền mặt.',
  },
  'cash-value': {
    name: 'Giá trị tiền mặt',
    definition:
      'Phần tích lũy tiết kiệm của hợp đồng nhân thọ vĩnh viễn, tăng dần theo thời gian và bên mua bảo hiểm có thể vay thế chấp hoặc rút ra.',
    shortDefinition: 'Phần tiết kiệm trong hợp đồng nhân thọ mà bạn có thể rút.',
  },
  annuity: {
    name: 'Niên kim',
    definition:
      'Sản phẩm tài chính, thường do doanh nghiệp bảo hiểm nhân thọ cung cấp, chi trả một dòng thu nhập trong một khoảng thời gian nhất định hoặc suốt đời. Sản phẩm này thường được dùng để chuẩn bị tài chính cho hưu trí.',
    shortDefinition: 'Sản phẩm trả thu nhập đều đặn, thường dùng cho hưu trí.',
  },

  // ─── Tái bảo hiểm ───────────────────────────────────────────────────
  reinsurance: {
    name: 'Tái bảo hiểm',
    definition:
      'Hình thức bảo hiểm mà một doanh nghiệp bảo hiểm mua từ một doanh nghiệp bảo hiểm khác để chuyển giao một phần rủi ro. Tái bảo hiểm giúp doanh nghiệp tự bảo vệ trước các tổn thất lớn hoặc tổn thất tích lũy.',
    shortDefinition: 'Bảo hiểm mà công ty bảo hiểm mua để san sẻ rủi ro.',
  },
  'ceding-company': {
    name: 'Công ty nhượng tái',
    definition:
      'Doanh nghiệp bảo hiểm gốc chuyển giao, hay nhượng, một phần rủi ro của mình cho doanh nghiệp tái bảo hiểm để đổi lấy một phần phí bảo hiểm.',
    shortDefinition: 'Công ty bảo hiểm chuyển rủi ro cho nhà tái bảo hiểm.',
  },
  retrocession: {
    name: 'Tái bảo hiểm tiếp',
    definition:
      'Hình thức tái bảo hiểm mà một doanh nghiệp tái bảo hiểm mua để chuyển tiếp một phần rủi ro đã nhận sang một doanh nghiệp tái bảo hiểm khác, gọi là nhà nhận tái bảo hiểm tiếp.',
    shortDefinition: 'Nhà tái bảo hiểm chuyển tiếp rủi ro sang nhà tái khác.',
  },
  treaty: {
    name: 'Hợp đồng tái bảo hiểm cố định',
    definition:
      'Thỏa thuận tái bảo hiểm tự động bảo hiểm cho cả một nhóm hoặc danh mục hợp đồng, thay vì thương lượng riêng cho từng rủi ro. Đây còn được gọi là tái bảo hiểm theo hợp đồng cố định.',
    shortDefinition: 'Tái bảo hiểm tự động cho cả một danh mục hợp đồng.',
  },
  facultative: {
    name: 'Tái bảo hiểm tùy chọn',
    definition:
      'Hình thức tái bảo hiểm được thu xếp riêng cho từng rủi ro hoặc từng hợp đồng đơn lẻ, mà doanh nghiệp tái bảo hiểm có thể chấp nhận hoặc từ chối theo từng trường hợp.',
    shortDefinition: 'Tái bảo hiểm thương lượng riêng cho từng rủi ro một.',
  },
  'quota-share': {
    name: 'Tái bảo hiểm theo tỷ lệ',
    definition:
      'Hợp đồng tái bảo hiểm theo tỷ lệ, trong đó doanh nghiệp tái bảo hiểm nhận một phần trăm cố định phí của mọi hợp đồng và chi trả cùng tỷ lệ phần trăm đó đối với các tổn thất.',
    shortDefinition: 'Nhà tái bảo hiểm nhận phần trăm cố định phí và tổn thất.',
  },
  'excess-of-loss': {
    name: 'Tái bảo hiểm vượt mức tổn thất',
    definition:
      'Hình thức tái bảo hiểm phi tỷ lệ, trong đó doanh nghiệp tái bảo hiểm chỉ chi trả phần tổn thất vượt quá ngưỡng giữ lại đã thỏa thuận.',
    shortDefinition: 'Nhà tái bảo hiểm chỉ trả phần tổn thất vượt ngưỡng đã định.',
  },
  'loss-ratio': {
    name: 'Tỷ lệ tổn thất',
    definition:
      'Tỷ lệ giữa số tiền bồi thường đã chi trả cộng với chi phí giải quyết bồi thường so với phí bảo hiểm thực thu. Đây là chỉ số quan trọng đo lường khả năng sinh lời từ hoạt động khai thác bảo hiểm.',
    shortDefinition: 'Tỷ lệ tiền bồi thường so với phí bảo hiểm thu được.',
  },

  // ─── Quản lý nhà nước ───────────────────────────────────────────────
  solvency: {
    name: 'Khả năng thanh toán',
    definition:
      'Khả năng của doanh nghiệp bảo hiểm trong việc đáp ứng các nghĩa vụ dài hạn bằng cách nắm giữ đủ tài sản để chi trả các yêu cầu bồi thường trong tương lai. Cơ quan quản lý giám sát chặt chẽ chỉ tiêu này nhằm bảo vệ bên mua bảo hiểm.',
    shortDefinition: 'Có đủ tài sản để chi trả các yêu cầu bồi thường tương lai.',
  },
  'solvency-margin': {
    name: 'Biên khả năng thanh toán',
    definition:
      'Phần chênh lệch giữa tài sản và nợ phải trả của doanh nghiệp bảo hiểm. Cơ quan quản lý yêu cầu duy trì một biên tối thiểu để làm tấm đệm chống lại các tổn thất bất ngờ.',
    shortDefinition: 'Phần tài sản dôi ra so với nợ làm tấm đệm dự phòng.',
  },
  reserve: {
    name: 'Dự phòng nghiệp vụ',
    definition:
      'Khoản tiền doanh nghiệp bảo hiểm trích lập để chi trả cho các tổn thất đã phát sinh nhưng chưa được giải quyết hoàn tất. Trích lập dự phòng đầy đủ là yếu tố then chốt đối với khả năng thanh toán.',
    shortDefinition: 'Tiền trích lập để chi trả các tổn thất còn nợ.',
  },
  ibnr: {
    name: 'Dự phòng IBNR',
    definition:
      'Viết tắt của "Incurred But Not Reported" (đã phát sinh nhưng chưa được thông báo), là khoản dự phòng dành cho các tổn thất từ những sự kiện đã xảy ra nhưng chưa được thông báo cho doanh nghiệp bảo hiểm.',
    shortDefinition: 'Dự phòng cho tổn thất đã xảy ra nhưng chưa được thông báo.',
  },
  'statutory-reporting': {
    name: 'Báo cáo theo luật định',
    definition:
      'Các báo cáo tài chính mà doanh nghiệp bảo hiểm buộc phải nộp cho cơ quan quản lý theo mẫu biểu quy định để chứng minh khả năng thanh toán và sự tuân thủ pháp luật.',
    shortDefinition: 'Báo cáo tài chính bắt buộc nộp cho cơ quan quản lý.',
  },
  compliance: {
    name: 'Tuân thủ',
    definition:
      'Việc tuân theo các luật, quy định và chuẩn mực điều chỉnh hoạt động của doanh nghiệp bảo hiểm, theo sự giám sát của cơ quan quản lý ngành.',
    shortDefinition: 'Tuân theo luật và quy định điều chỉnh doanh nghiệp bảo hiểm.',
  },
  'combined-ratio': {
    name: 'Tỷ lệ kết hợp',
    definition:
      'Tổng của tỷ lệ tổn thất và tỷ lệ chi phí của doanh nghiệp bảo hiểm. Chỉ số dưới 100% cho thấy hoạt động khai thác bảo hiểm có lãi, còn trên 100% cho thấy hoạt động này bị lỗ.',
    shortDefinition: 'Tổn thất cộng chi phí so với phí; dưới 100% là có lãi.',
  },
};
