
$(function() {
        describe('RSS Feeds', function() {
        /* Test RSS feeds, make sure they are being loaded to the allFeeds array.  
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Loop through the allFeeds array to make sure that each link has a URL
         */
         it('url-defined', function(){
            allFeeds.forEach(function(feed){
                expect(feed.url).toBeTruthy();
              });
            
         });


        /* Loop through the allFeeds array to make sure each link has a name
         */
           it('name-defined', function(){
            allFeeds.forEach(function(feed){
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
            
         });

    });


 
describe('The Menu', function() {
        /* Test to make sure menu is hiddne by default. this happens when 
        the class 'menu-hidden' is applied to the body element
         */
         it('initial-hidden-state', function(){
            var menu = document.querySelector('body');
            expect(menu.classList.contains('menu-hidden')).toBe(true);
         });
         /* Test that the menu will open and close on clicks. this is done 
         when you click on the element named 'menu-icon-link' and then the class 
         'menu-hidden' is toggled on/off for body element
          */
          it('menu-toggle', function(){
            var menu = document.querySelector('body');
            var menuIcon = document.querySelector('.menu-icon-link');

            menuIcon.click();
            expect(menu.classList.contains('menu-hidden')).toBe(false);
            menuIcon.click();
            expect(menu.classList.contains('menu-hidden')).toBe(true);
         });

  
});


  describe('Initial Entries', function(){
            /* After load feed function is completed, make sure that 
            there are entries in the feed. 
         */
         beforeEach(function(done){
            loadFeed(0, done);
         });

         it('feed-is-loaded', function(){
            var entries = document.querySelectorAll('.entry');
            expect(entries.length).toBeGreaterThan(0);
                      
         });
     });

describe('New Feed Selection', function(){
    /* Test that the content of the feed changes after a new feed is loaded
         */
        var initialFeed;
        var newFeed;
        beforeEach(function(done){
            loadFeed(0);
            initialFeed = document.querySelector('.feed').innerHTML;
            loadFeed(1, done);
            
         });

         it('context-updates', function(){
            newFeed = document.querySelector('.feed').innerHTML;
            expect(initialFeed).not.toMatch(newFeed)
         })


        
  })



}());
