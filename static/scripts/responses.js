function getBotResponse(input) {
    if(input =="Bắt đầu"){
        return "Những chuyến bay được khởi hành vào hôm nay. <br>1. Quy Nhơn-> Hà Nội <br> 2. Quy Nhơn-> TP.Hồ Chí Minh <br> 3. Quy Nhơn-> Vinh";                                                                                                                                     
    } else if (input == "1") {
        return "Thời gian khởi hành: <br>1. 4h30 <br> 2. 9h45 <br> 3. 19h30 <br>Đặt vé ngay";
    } else if (input == "2") {
        return "Thời gian khởi hành: <br>1. 5h30 <br> 2. 8h45 <br> 3. 20h30 <br>Đặt vé ngay";
    } else if (input == "3") {
        return "Thời gian khởi hành: <br>1. 6h30 <br> 2. 10h45 <br> 3. 21h30 <br>Đặt vé ngay";
    } else if (input == "Đặt vé ngay") {
        return "Chúng tôi cần bạn cung cấp các thông tin sau:<br>Họ và tên, <br>Số điện thoại, <br>Số lượng vé, <br>Chuyến bay, <br>Thời gian bay";
    }
   else {
        return "Chúng tôi đã ghi nhận thông tin của bạn!<br>Bạn vui lòng đến sớm trước 1 giờ bay để chúng tôi hoàn thành thủ tục";
    }
}