//exercise #1
$(document).ready(function () {

    $('body').css({ 'display': 'flex', 'width': 'fit-content' });

    let arr = [];

    for (let i = 0; i < 100; i++) {
        let div = $('<div>');
        arr.push(div);
        $('body').append(arr[i]);
    }

    function blueBlocks() {
        $.each(arr, function (div) {
            $('div').css({
                'width': '70px',
                'height': '70px',
                'margin': '10px',
                'background': 'deepskyblue',
            });
        });
    }
    setTimeout(blueBlocks, 2000);

    function violetBlocks() {
        $.each(arr, function (div) {
            $('div').css({
                'width': '100px',
                'height': '100px',
                'background': 'violet',
            });
        });
    }
    setTimeout(violetBlocks, 4000);

    function index() {
        for (let i = 0; i < arr.length; i++) {
            $(arr[i]).text([i + 1]);
            arr[i].css({
                'display': 'flex',
                'align-items': 'center',
                'justify-content': 'center',
                'font-size': '30px',
                'color': 'black'
            });
        }
    }
    setTimeout(index, 6000);

    function blocksTriangles() {
        for (let i = 0; i < arr.length; i++) {
            if ((i + 1) % 3 === 0) {
                arr[i].css({
                    'background': 'red'
                });
            }
            if ((i + 1) % 15 === 0) {
                arr[i].css({
                    'border-left': '50px solid white',
                    'border-right': '50px solid white',
                    'border-bottom': '100px solid rgb(195, 176, 145)',
                    'width': '0px',
                    'height': '0px',
                });
            }
        }
    }
    setTimeout(blocksTriangles, 8000);

    function deleteRed() {
        for (let i = 0; i < arr.length; i++) {
            if ((i + 1) % 15 === 0) {
                arr[i].css({
                    'border-left': '50px solid white',
                    'border-right': '50px solid white',
                    'border-bottom': '100px solid rgb(195, 176, 145)',
                    'width': '0px',
                    'height': '0px',
                });
            } else if ((i + 1) % 3 === 0) {
                arr[i].remove();
            }
        }
    }
    setTimeout(deleteRed, 10000);
});

//exercise #2
// $(document).ready(function () {
//     let div = $('<div>');
//     let div2 = $('<div>');

//     $('body').append(div);
//     $('body').append(div2);

//     div.css({
//         'width': '200px',
//         'height': '100px',
//         'background': 'gold',
//         'margin': '20px',
//     })
//     div2.css({
//         'width': '240px',
//         'height': '120px',
//         'background': 'silver',
//         'margin': '22px',
//     })

//     div.click(function () {
//         alert('Цвет: золотой')
//     })
//     div2.click(function () {
//         alert('Цвет: серебряный')
//     })

//     div.mouseover(function () {
//         console.log('Ширина: ' + div.css("width") + ' Высота: ' + div.css("height"))
//     })
//     div2.mouseover(function () {
//         console.log('Ширина: ' + div2.css("width") + ' Высота: ' + div2.css("height"))
//     })
// })









