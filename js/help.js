/**
 * Created with JetBrains WebStorm.
 * User: archermind
 * Date: 3/2/13
 * Time: 10:19 AM
 * To change this template use File | Settings | File Templates.
 */
var HelpPage = {
    init: function hp_init(){
        //this._ = navigator.mozL10n.get;
        var supportpage =document.getElementById("support-page");
        var faqpage = document.getElementById("faq-page");
     
        var title = document.getElementById("alcatelHelp");

        var link_support=document.getElementById('link_support');
        var link_faq=document.getElementById('link_faq');

        var support_button=document.getElementById('support_guide');
        var faq_button=document.getElementById('faq_guide');

       // title.innerHTML=this._('Title');
   title.innerHTML="Alcatel Help";
        //title.setAttribute('data-l10n-id','Title');
        //supportpage.innerHTML=this._('ALCATELGlobalSupportPrompt');
supportpage.innerHTML ="If you have questions or need assistance when using the mobile phone, you can visit ALCATEL global support website for help:"
        //supportpage.setAttribute('data-l10n-id','ALCATELGlobalSupportPrompt');
       // faqpage.innerHTML=this._('FAQsPagePrompt');
 faqpage.innerHTML="You can also visit the FAQs page to find the answer to your question directly:"
        //faqpage.setAttribute('data-l10n-id','FAQsPagePrompt');

        //support_button.textContent = this._('ButtonContent');
          support_button.textContent="Go now";
        //support_button.setAttribute('data-l10n-id','ButtonContent');
        faq_button.textContent = this._('ButtonContent');
         faq_button.textContent="Go now";
        //faq_button.setAttribute('data-l10n-id','ButtonContent');
        /*
         * Open a link with a web activity
         */
        function openGuide(url) {
            // browse a URL
            new MozActivity({
                name: 'view',
                data: { type: 'url', url: url }
            });
        }

        var url = 'http://www.alcatelonetouch.com/global-en/support/faq.html';
        var url_faq = 'http://www.alcatelonetouch.com/global-en/support/faq/ot-fire.html';
         //var url = this._('urlLink');
        // var  url_faq =this._('urlFaq');
          link_support.href = url;
          link_faq.href = url_faq;
      link_support.textContent = url;
      link_faq.textContent = url_faq;
      link_support.setAttribute('data-l10n-id','urlLink');
      link_faq.setAttribute('data-l10n-id','urlFaq');
        document.getElementById('support_guide').onclick =
          
            function openUserGuide() {

                openGuide(url)
            };

        document.getElementById('faq_guide').onclick =
         
            function openUserGuide() {

                openGuide(url_faq)
            };
    }

};

//navigator.mozL10n.ready(HelpPage.init.bind(HelpPage));
window.onload=function(){
HelpPage.init();
}

