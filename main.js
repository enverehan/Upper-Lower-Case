$(document).ready(function() {

    $(".buyuk_harf").click(function() {

        // Büyük harfe çevirebilme için şuan ki değeri al
        var suanki_mesaj = $("[name='mesajiniz']").val();

        // Alınan değeri büyük harfe çevir
        var yeni_mesaj = suanki_mesaj.toUpperCase();

        // Büyük harfe çevirilen değeri yerine yerleştir
        $("[name='mesajiniz']").val( yeni_mesaj );

    });


    $(document).on('click', '.kucuk_harf', function() {

        // Küçük harfe çevirebilme için şuan ki değeri al
        var suanki_mesaj = $("[name='mesajiniz']").val();

        // Alınan değeri küçük harfe çevir
        var yeni_mesaj = suanki_mesaj.toLowerCase();

        // Küçük harfe çevirilen değeri yerine yerleştir
        $("[name='mesajiniz']").val( yeni_mesaj );

    });


});