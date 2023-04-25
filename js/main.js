$(function() {

    const w = 128;
    const h = 32;

    /**
     * ドットをテーブルに追加
     */
    $("#view-table").append(
        (new Array(h)).join(`<tr>${(new Array(w)).join(`<td>
            <div class='view-dot'>
                <div class='view-blender'>
                    <div class='r'></div>
                    <div class='g'></div>
                    <div class='b'></div>
                </div>
            </div>
        </td>`)}</tr>`)
    )
    
    /**
     * ホバー時のイベント
     */
    $(".view-dot").hover((e) => {
        $(e.target).parent().addClass("COLORED");
    }, () => {
        
    })

})