(function(){

  angular
       .module('fd')
       .controller('FdController', [
          '$mdSidenav', '$mdBottomSheet', '$log', '$q',
          FdController
       ]);

  /**
   * Main Controller for the Angular Material Starter App
   * @param $scope
   * @param $mdSidenav
   * @param avatarsService
   * @constructor
   */
  function FdController( $mdSidenav, $mdBottomSheet, $log, $q) {
    var self = this;

    self.toggleList   = toggleUsersList;

    // Load all registered users

    // *********************************
    // Internal methods
    // *********************************

    /**
     * First hide the bottomsheet IF visible, then
     * hide or Show the 'left' sideNav area
     */
    function toggleUsersList() {
      var pending = $mdBottomSheet.hide() || $q.when(true);

      pending.then(function(){
        $mdSidenav('left').toggle();
      });
    }


  }

})();
