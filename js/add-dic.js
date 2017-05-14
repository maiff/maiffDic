
chrome.storage.sync.get("maiffs", function(item) {
      // Notify that we saved.
      // message('Settings saved');
      console.log(item.maiffs)
      item.maiffs.forEach(function(element) {
        let li = $(`<li>${element.w}------------------------------${element.t}</li>`)
        $('#word-list').append(li)
      }, this);
      
      
      
});