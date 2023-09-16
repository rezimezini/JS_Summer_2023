const { expect } = require("chai");

describe('Multiple Web Elements', ()=>{

    it('Verify there are more than 40 links on the facebook.com',async ()=>{
       
        //1. Launch facebook.com 

        await browser.url('https://www.facebook.com/');
        await browser.pause(2000);

        //2. Verify there are more than 40-links
        const allLinks = await $$('<a>');
        expect(allLinks.length>0,'Number of links are not as expected').to.be.true;
        await browser.pause(2000);
    })

     it.only('Verify number of options in Church Chairs is equals to 7',async ()=>{
         
        //1. Launch https://classroomessentialsonline.com/  

         await browser.url('https://classroomessentialsonline.com/');
         await browser.pause(2000);
         await browser.maximizeWindow();

        //2. Move mouse to Church Chairs
         const churchChairs= await $('//a[@href="/church-chairs/"]');
         await  churchChairs.moveTo();
         await browser.pause(2000);
         




        //  3. Verify there are 7-options in Church Chairs
           
         const churchChairOptions =await  $$('//a[@href="/church-chairs/"]/following-sibling::div//li//a');
         expect(churchChairOptions.length,'There are not 7 options in Church Chairs').to.equal(7);
        

     })
})