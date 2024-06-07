const isHomeFooter = document.getElementById('footer1').getAttribute('data-page') === 'home1';
const mainUrlFooter = isHomeFooter ? '' : './../../index.html';

const isHomeFooter1 = document.getElementById('footer1').getAttribute('data-page') === 'home1';
const mainUrlFoote1r = isHomeFooter ? '' : '.';

const isHomeFooter2 = document.getElementById('footer1').getAttribute('data-page') === 'home1';
const mainUrlFooter2 = isHomeFooter ? '' : './../.';






document.getElementById('footer1').innerHTML = `  

<div>
               <span class="lang-element ro"><span class="logo">CEI - Centru Educație Incluzivă</span></span>
               <span class="lang-element en" style="display: none;"><span class="logo">CEI - Center for Inclusive Education</span></span>
               <span class="lang-element ru" style="display: none;"><span class="logo">CEI - Центр инклюзивного образования</span></span>
          </div>
   
          <div class="row">
               <div class="col-3">                
                   <div class="link-cat" onclick="footerToggle(this)">
                       <span class="footer-toggle"></span>
                       <span class="lang-element ro"><span class="footer-cat">Despre Noi</span></span>
                       <span class="lang-element en" style="display: none;"><span class="footer-cat">About Us</span></span>
                       <span class="lang-element ru" style="display: none;"><span class="footer-cat">О Hас</span></span>
                   </div>
                   <ul class="footer-cat-links">

                       <span class="lang-element ro"><li><a href=""><span>Sondaje</span></a></li></span>
                       <span class="lang-element en" style="display: none;"><li><a href=""><span>Polls</span></a></li></span>
                       <span class="lang-element ru" style="display: none;"><li><a href=""><span>Oпросы</span></a></li></span>

                       <span class="lang-element ro"><li><a href=""><span>Chestionare</span></a></li></span>
                       <span class="lang-element en" style="display: none;"><li><a href=""><span>Questionnaires</span></a></li></span>
                       <span class="lang-element ru" style="display: none;"><li><a href=""><span>Aнкеты</span></a></li></span>

                       <span class="lang-element ro"><li><a href="${mainUrlFooter}./pages/Despre Noi/FAQ.html"><span>Întrebări Frecvente</span></a></li></span>
                       <span class="lang-element en" style="display: none;"><li><a href="${mainUrlFooter}./pages/Despre Noi/FAQ.html"><span>Frequent questions</span></a></li></span>
                       <span class="lang-element ru" style="display: none;"><li><a href="${mainUrlFooter}./pages/Despre Noi/FAQ.html"><span>Частые вопросы</span></a></li></span>
                   </ul>
               </div>
               <div class="col-3">
                   <div class="link-cat" onclick="footerToggle(this)">
                       <span class="footer-toggle"></span>
                       <span class="lang-element ro"><span class="footer-cat">Adaptări</span></span>
                       <span class="lang-element en" style="display: none;"><span class="footer-cat">Adjustments</span></span>
                       <span class="lang-element ru" style="display: none;"><span class="footer-cat">Aдаптации</span></span>
                   </div>
                   <ul class="footer-cat-links">
                       <span class="lang-element ro"><li><a href=""><span>Camere Speciale</span></a></li></span>
                       <span class="lang-element en" style="display: none;"><li><a href=""><span>Special Rooms</span></a></li></span>
                       <span class="lang-element ru" style="display: none;"><li><a href=""><span>Специальные Hомера</span></a></li></span>

                       <span class="lang-element ro"><li><a href=""><span>Materiale Didactice</span></a></li></span>
                       <span class="lang-element en" style="display: none;"><li><a href=""><span>Didactic Materials</span></a></li></span>
                       <span class="lang-element ru" style="display: none;"><li><a href=""><span>Дидактические Mатриалы</span></a></li></span>

                       <span class="lang-element ro"><li><a href=""><span>Adaptări Locomotorii</span></a></li></span>
                       <span class="lang-element en" style="display: none;"><li><a href=""><span>Didactic Materials</span></a></li></span>
                       <span class="lang-element ru" style="display: none;"><li><a href=""><span>Адаптации Локомотива</span></a></li></span>

                       <span class="lang-element ro"><li><a href=""><span>Echipamente Asistive</span></a></li></span>
                       <span class="lang-element en" style="display: none;"><li><a href=""><span>Assistive Equipment</span></a></li></span>
                       <span class="lang-element ru" style="display: none;"><li><a href=""><span>Вспомогательное Oборудование</span></a></li></span>

                       <span class="lang-element ro"><li><a href=""><span>Echipamente Digitale</span></a></li></span>
                       <span class="lang-element en" style="display: none;"><li><a href=""><span>Digital Equipment</span></a></li></span>
                       <span class="lang-element ru" style="display: none;"><li><a href=""><span>Цифровое Oборудование</span></a></li></span>
                   </ul>
               </div>
               <div class="col-3">
                   <div class="link-cat" onclick="footerToggle(this)">
                       <span class="footer-toggle"></span>
                       <span class="lang-element ro"><span class="footer-cat">Clubul Părinților</span></span>
                       <span class="lang-element en" style="display: none;"><span class="footer-cat">Parents Club</span></span>
                       <span class="lang-element ru" style="display: none;"><span class="footer-cat">Родительский Kлуб</span></span>
                   </div>
                   <ul class="footer-cat-links">
                       <span class="lang-element ro"><li><a href=""><span>Ce este?</span></a></li></span>
                       <span class="lang-element en" style="display: none;"><li><a href=""><span>What is this?</span></a></li></span>
                       <span class="lang-element ru" style="display: none;"><li><a href=""><span>Что это?</span></a></li></span>
                       
                       <span class="lang-element ro"><li><a href=""><span>Fă parte!</span></a></li></span>
                       <span class="lang-element en" style="display: none;"><li><a href=""><span>Be a part!</span></a></li></span>
                       <span class="lang-element ru" style="display: none;"><li><a href=""><span>Быть порознь!</span></a></li></span>
                   </ul>
               </div>
               <div class="col-3" id="newsletter">
                   
                   
                   <div class="social-links social-2">
                       <a href=""><i class="fab fa-facebook-f"></i></a>
                       <a href=""><i class="fa fa-envelope"></i></a>
                       <a href=""><i class="fab fa-viber"></i></a>
                       <a href=""><i class="fab fa-whatsapp"></i></a>
                      
                   </div>
   
                   <div id="address">
                       <span class="lang-element ro">Locația Officială</span>
                       <span class="lang-element en" style="display: none;">Official Location</span>
                       <span class="lang-element ru" style="display: none;">Официальное Mестоположение</span>
                       <ul>
                           <li>
                               <i class="far fa-building"></i>
                               <div>or.Chișinău<br/>
                               r. Ialoveni, Str. Basarabia 2, Liceul Teoretic ,,Petre Ștefănucă”</div>
                           </li>
                           <li>
                               
                           </li>
                       </ul>
                   </div>
                   
               </div>
               <div class="social-links social-1 col-6">
                <a href=""><i class="fab fa-facebook-f"></i></a>
                <a href=""><i class="fa fa-envelope"></i></a>
                <a href=""><i class="fab fa-viber"></i></a>
                <a href=""><i class="fab fa-whatsapp"></i></a>
                   
               </div>
          </div>
          <div id="copyright">

            <span class="lang-element ro">&copy; 2024 Conține toate drepturile de autor.</span>
            <span class="lang-element en" style="display: none;">&copy; 2024 Contains all copyrights.</span>
            <span class="lang-element ru" style="display: none;">&copy; 2024 Содержит все авторские права.</span>

          </div>
          <div class:"disclaimer" id="owner">
          <p class:"disclaimer-p">Acest WebSite a fost realizat în cadrul competiției "TekWill Junior Abassadors" organizată de proiectul "TekWill în Fiecare Școală"</p>
          </div>
`;





function footerToggle(footerBtn) {
    $(footerBtn).toggleClass("btnActive");
    $(footerBtn).next().toggleClass("active");
}