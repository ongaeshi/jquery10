$(function () {
  var dict = [
    {
      "value": "insertAfter(c)",
      "id": "カレント要素を要素cの後ろに追加（afterの逆）",
      "label": "insertAfter(c)"
    },
    {
      "value": "after(c)",
      "id": "要素cをカレント要素の後ろに追加",
      "label": "after(c)"
    },
    {
      "value": "wrapAll(html｜elem)",
      "id": "カレント要素全体を指定したHTML文字列／要素で囲む",
      "label": "wrapAll(html｜elem)"
    },
    {
      "value": "after(fn)",
      "id": "関数の結果をカレント要素の後ろに追加",
      "label": "after(fn)"
    },
    {
      "value": "append(fn)",
      "id": "関数の結果を、カレント要素の子要素末尾に追加",
      "label": "append(fn)"
    },
    {
      "value": "before(fn)",
      "id": "関数の結果をカレント要素の前に追加",
      "label": "before(fn)"
    },
    {
      "value": "prepend(fn)",
      "id": "関数の結果を、カレント要素の子要素先頭に追加",
      "label": "prepend(fn)"
    },
    {
      "value": "replaceWith(c)",
      "id": "カレント要素を要素cで置き換え",
      "label": "replaceWith(c)"
    },
    {
      "value": "insertBefore(c)",
      "id": "カレント要素を要素cの前に追加（beforeの逆）",
      "label": "insertBefore(c)"
    },
    {
      "value": "prepend(c)",
      "id": "要素cを、カレント要素の子要素先頭に追加",
      "label": "prepend(c)"
    },
    {
      "value": "wrapInner(fn)",
      "id": "カレント要素の中身を関数の結果で囲む",
      "label": "wrapInner(fn)"
    },
    {
      "value": "appendTo(c)",
      "id": "カレント要素を、要素cの子要素末尾に追加（appendの逆）",
      "label": "appendTo(c)"
    },
    {
      "value": "detach([exp])",
      "id": "カレント要素をイベントリスナを維持したまま破棄（引数expでフィルタリングも可）",
      "label": "detach([exp])"
    },
    {
      "value": "empty()",
      "id": "カレント要素配下のすべてのノードをクリア",
      "label": "empty()"
    },
    {
      "value": "prependTo(c)",
      "id": "カレント要素を、要素cの子要素先頭に追加（prependの逆）",
      "label": "prependTo(c)"
    },
    {
      "value": "unwrap()",
      "id": "カレント要素を囲んでいる要素を取る",
      "label": "unwrap()"
    },
    {
      "value": "wrapInner(html｜elem)",
      "id": "カレント要素の中身を指定したHTML文字列／要素で囲む",
      "label": "wrapInner(html｜elem)"
    },
    {
      "value": "before(c)",
      "id": "要素cをカレント要素の前に追加",
      "label": "before(c)"
    },
    {
      "value": "remove([exp])",
      "id": "カレント要素を削除（引数expでフィルタリングも可）",
      "label": "remove([exp])"
    },
    {
      "value": "append(c)",
      "id": "要素cをカレント要素の子要素末尾に追加",
      "label": "append(c)"
    },
    {
      "value": "replaceAll(c)",
      "id": "カレント要素で、要素cを置き換え",
      "label": "replaceAll(c)"
    },
    {
      "value": "replaceWith(fn)",
      "id": "カレント要素を関数fnの結果で置き換え",
      "label": "replaceWith(fn)"
    },
    {
      "value": "wrap(html｜elem)",
      "id": "カレント要素を指定したHTML文字列／要素で囲む",
      "label": "wrap(html｜elem)"
    }
  ];

  $('#keyword').autocomplete({
    source: 'autocomplete',
    delay: 500,
    minLength: 1,
    select: function(e, ui) {
      if (ui.item) { $('#result').html(ui.item.id); }
    }
  });
});