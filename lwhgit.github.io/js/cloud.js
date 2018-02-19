var dbx = new Dropbox({accessToken: "thTCtmHw-s4AAAAAAAAGNnb3QKI5-s0risHBLoHDpl24WKTWtDU7uQHFzuK15D74"});
dbx.filesListFolder({path: ''})
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    });
