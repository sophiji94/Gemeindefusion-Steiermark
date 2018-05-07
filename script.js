var Gemeindefusion1 = [77, 123, 255, 56, 26, 2, 2];
var Gemeindefusion2 = [2, 14, 142, 84, 31, 12, 2];

$('#balken1').attr('y', (340-1)-Gemeindefusion2[0]);
$('#balken2').attr('y', (340-1)-Gemeindefusion2[1]);
$('#balken3').attr('y', (340-1)-Gemeindefusion2[2]);
$('#balken4').attr('y', (340-1)-Gemeindefusion2[3]);
$('#balken5').attr('y', (340-1)-Gemeindefusion2[4]);
$('#balken6').attr('y', (340-1)-Gemeindefusion2[5]);
$('#balken7').attr('y', (340-1)-Gemeindefusion2[6]);
$('#balken1').attr('height', Gemeindefusion2[0]);
$('#balken2').attr('height', Gemeindefusion2[1]);
$('#balken3').attr('height', Gemeindefusion2[2]);
$('#balken4').attr('height', Gemeindefusion2[3]);
$('#balken5').attr('height', Gemeindefusion2[4]);
$('#balken6').attr('height', Gemeindefusion2[5]);
$('#balken7').attr('height', Gemeindefusion2[6]);
$('#text1').attr('y', (340-3)-Gemeindefusion2[0]);
$('#text2').attr('y', (340-3)-Gemeindefusion2[1]);
$('#text3').attr('y', (340-3)-Gemeindefusion2[2]);
$('#text4').attr('y', (340-3)-Gemeindefusion2[3]);
$('#text5').attr('y', (340-3)-Gemeindefusion2[4]);
$('#text6').attr('y', (340-3)-Gemeindefusion2[5]);
$('#text7').attr('y', (340-3)-Gemeindefusion2[6]);
$('#text1').text(Gemeindefusion2[0]);
$('#text2').text(Gemeindefusion2[1]);
$('#text3').text(Gemeindefusion2[2]);
$('#text4').text(Gemeindefusion2[3]);
$('#text5').text(Gemeindefusion2[4]);
$('#text6').text(Gemeindefusion2[5]);
$('#text7').text(Gemeindefusion2[6]);
//(340-3)-Gemeindefusion2[0]//
$('#clickme1').on('click', function () {
    $('#svg1').show();
    $('#svg2').hide();
});
$('#clickme2').on('click', function () {
    $('#svg1').hide();
    $('#svg2').show();
});

var team = ["Tabea Krämer, tabea.kraemer@edu.fh-joanneum.at",
            "Sophie Marak, sophie.marak@edu.fh-joanneum.at",
            "Alina Neumann, alina.neumann@edu.fh-joanneum.at"];
    for (var i = 0; i < team.length; i = i + 1) {
              $("#team").append("<li>" + team[i] + "</li>");
            }
