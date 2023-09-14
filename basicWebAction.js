const { expect } = require("chai");

describe('basic web action', () => {

    it('Verify user can go back and forward as expected', async () => {
         //1. Launch Amazon
        await browser.url('https://www.amazon.com/');
        await browser.maximizeWindow();
      
         //2. Verify page title contains 'Spend less. Smile more'
         const pageTitle = await browser.getTitle();
         const isContainsSpendAndSmile= pageTitle.toLowerCase().includes('"Spend less.Smile more"');
         expect(isContainsSpendAndSmile,'Page title not found').to.be.true;
         await browser.pause(2000);

         //3. Launch Hotels
         await browser.url('https://www.hotels.com/');


         //4. Verify current url contains "hotels.com"
         const currentUrl = await browser.getUrl();
         
         expect(currentUrl.includes('hotels'),'Current URL does not includes hotels.com').to.be.true;
        
         // 5. Go back
         await browser.back();

         //6. verify current url contains "amazon.com"

         const hotelUrl = await browser.getUrl();
         await browser.pause(2000);
         expect(hotelUrl.includes('hotels.com','Hotel title is not included')).to.be.true;
         await browser.pause(2000);
         //7. Go forward
         await browser.forward();
         //8. Verify page title contains "Deals and Discounts"
         const dealAndDiscountTitle = await browser.getTitle();
         const verifyTitleDisplayed = dealAndDiscountTitle.toLowerCase().includes('Deals & Discounts');
         expect(verifyTitleDisplayed,'Hotel does not includes Deals and Discounts').to.be.true;
         await browser.pause(2000);




    })


})




