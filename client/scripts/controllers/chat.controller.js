angular
  .module('Whatsapp')
  .controller('ChatCtrl', ChatCtrl);

// The order of these parameters does not match the description in the blog??
function ChatCtrl ($scope, $reactive, $stateParams) {
  $reactive(this).attach($scope);

  let chatId = $stateParams.chatId;

  // let will limit the scope to the nearest enclosing block, may not be visible where needed

  this.helpers({
    data() {
      var aChat = Chats.findOne(chatId);
      console.log("ID:" + chatId);
      return aChat;
    }
  });
}
