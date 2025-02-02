import style from './style.module.scss';
import { motion } from 'framer-motion';

function KvkkPage() {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: -30 }}
      animate={{ opacity: 1, translateY: 0 }}
    >
      <div
        className={`${style.kvkk} mx-auto max-w-7xl pt-6 md:pt-[50px] pb-[90px] px-8`}
      >
        <div className="kvkk-container flex flex-col gap-6">
          <h3 className="text-heading-5 md:text-heading-3 primary-color">
            Kişisel Verilerin İşlenmesine İlişkin Aydınlatma Metni
          </h3>
          <p className="text-body-sm-regular sm:text-body-md-regular">
            Bu aydınlatma metni, 6698 sayılı Kişisel Verilerin Korunması Kanunu
            ("Kanun") uyarınca, Mirketgiller Topluluğu olarak tarafınıza ait
            kişisel verilerin (adınız, soyadınız, telefon numaranız, e-posta
            adresiniz gibi kimliği belirli veya belirlenebilir her türlü bilgi)
            işlenmesi ve bu konudaki haklarınız hakkında bilgilendirilmeniz
            amacıyla hazırlanmıştır.
          </p>
          <div className="flex flex-col gap-2">
            <h6 className="text-heading-6 primary-color">
              Kişisel Verilerin İşlenme Amaçları
            </h6>
            <p className="text-body-sm-regular sm:text-body-md-regular">
              Mirketgiller Topluluğu, kişisel verilerinizi: soru ve
              taleplerinizi yanıtlamak, topluluğumuza katılımınızı sağlamak,
              iletişim faaliyetlerini yürütmek, topluluk projelerimize yönelik
              iş birliği fırsatlarını değerlendirmek amaçlarıyla işleyecektir.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h6 className="text-heading-6 primary-color">
              Kişisel Verilerin Toplanma Yöntemleri Ve Hukuki Sebepleri
            </h6>
            <p className="text-body-sm-regular sm:text-body-md-regular">
              Kişisel verileriniz, web sitemiz üzerinden doldurduğunuz iletişim
              formu aracılığıyla elektronik ortamda toplanmaktadır. Bu veriler,
              Kanun’un 5. maddesi kapsamında açık rızanıza dayanılarak
              işlenmektedir.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h6 className="text-heading-6 primary-color">
              Kişisel Verilerin Aktarımı
            </h6>
            <p className="text-body-sm-regular sm:text-body-md-regular">
              Kişisel verileriniz, yalnızca yukarıda belirtilen amaçların
              gerçekleştirilmesi için topluluk içi birimlerle veya yasal
              zorunluluklar çerçevesinde yetkili kurum ve kuruluşlarla
              paylaşılabilir. Kişisel verileriniz, üçüncü şahıslarla izniniz
              olmaksızın paylaşılmayacaktır.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h6 className="text-heading-6 primary-color">
              Kişisel Verilerinize İlişkin Haklarınız
            </h6>
            <ul>
              <li className="text-body-sm-regular sm:text-body-md-regular">
                Kişisel verilerinizin işlenip işlenmediğini öğrenme,
              </li>
              <li className="text-body-sm-regular sm:text-body-md-regular">
                İşlenmişse buna ilişkin bilgi talep etme,
              </li>
              <li className="text-body-sm-regular sm:text-body-md-regular">
                İşleme amacını ve amaca uygun kullanılıp kullanılmadığını
                öğrenme,
              </li>
              <li className="text-body-sm-regular sm:text-body-md-regular">
                Verilerinizin eksik veya yanlış işlenmiş olması halinde
                düzeltilmesini isteme,
              </li>
              <li className="text-body-sm-regular sm:text-body-md-regular">
                Verilerinizin silinmesini veya yok edilmesini talep etme,
              </li>
              <li className="text-body-sm-regular sm:text-body-md-regular">
                İşleme faaliyetlerine itiraz etme.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default KvkkPage;
