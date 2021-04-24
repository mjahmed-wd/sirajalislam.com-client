import React from "react";
import CardComponent from "../../SharableComponents/CardComponent/CardComponent";
// import CenterCenter from "../../SharableComponents/CenterCenter/CenterCenter";
import bgImg from "../../../images/webp/bottomBg.webp";
import { useLanguage } from "../../LanguageProvider/LanguageProvider";
const Section16 = () => {
  const {language}=useLanguage()
  return (
    <div className="hundredPto100vh" style={{backgroundImage: `url(${bgImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center bottom"}}>
      <div className="container">
        <div className="row pt-5 pb-5 hundred10p-100vh-v720" 
        // style={{minHeight:window.innerWidth<720?"110%":"100vh"}}
        >
          <CardComponent title={language==="en"?`BUSINESS CONTRIBUTIONS`:`مساهمات الأعمال`}>
            {language==="en"?<><ul>
              <li>
                Oversaw merger and integration for 70 companies into relevant
                sector specific businesses.
              </li>
              <li>
                Assumed control of all property management (legal and
                operational) and reduced property portfolio 60%.
              </li>
              <li>
                Saved company more than £1.3M as a result of innovative policy
                improvements
              </li>
              <li>
                Assumed control of all property management (legal and
                operational) and reduced property portfolio 60%.
              </li>
              <li>
                Oversaw representative transactions for the Department for Work
                and Pensions (DWP) PFI with Land Securities Trillium (LST),
                STEPS (Strategic Transfer of Estate to the Private Sector, a PFI
                initiative with HMRC), London Underground PPP, Sheffield City
                Council PFI, and Walsgrave PFI Hospital, Coventry
              </li>
            </ul></>:<>
            {/* arabic */}
            <ul>
              <li>أشرف على الاندماج والتكامل لـ 70 شركة في الأعمال ذات الصلة بقطاعات محددة.</li>
              <li>السيطرة المفترضة على جميع ادارة الممتلكات (القانونية والتشغيلية) ومحفظة الممتلكات المخفضة 60٪.</li>
              <li>توفير أكثر من 1.3 مليون جنيه إسترليني للشركة نتيجة للتحسينات المبتكرة في السياسة.</li>
              <li>تقديم تقييمات للمخاطر على حقوق الملكية والمعاملات غير القائمة على الأسهم لمديري الشركات وتقييم أهمية إعادة تمويل مشاريع مبادرة التمويل الشخصي.</li>
              <li>الإشراف على معاملات التمثيل لإدارة العمل والمعاشات وضمانات العقارات والتحويل الاستراتيجي للقطاع الخاص ومبادرات التمويل الخاص ومترو الأنقاق بلندن ومبادرات التمويل الشخصي في مجلس دينة شيفيلد ومشتشفى والسجريف، وكوفنتي.</li>
            </ul>
            </>
            }
          </CardComponent>
          <CardComponent title={language==="en"?`LEGAL CONTRIBUTIONS `:`المساهمات القانونية`}>
          {language==="en"?<><ul>
              <li>
                Managed legal activities for 70 companies in relation to
                corporate governance, risk mitigation, and regulatory compliance
                to UK and European Union standards for competition and data
                protection.
              </li>
              <li>
                Reviewed and advised on PFI project agreements, security
                documents, and collateral/interfacing agreements
              </li>
              <li>
                Drafted, negotiated, and advised on commercial agreements
                pertaining to facility management, general outsourcing, software
                development, IT, and payroll.
              </li>
              <li>
                Advised on insolvency mattes, director’s liability, indemnities,
                and process of placing company in liquidation
              </li>
              <li>
                Counselled on shares issues such as increasing and decreasing
                share capital, division and consolidation of shares, and shares
                redistribution; also provided advice on executive, board, and
                shareholders powers.
              </li>
            </ul></>:<>
            {/* arabic */}
            <ul>
              <li>إدارة الأنشطة القانونية لـ 70 شركة فيما يتعلق بإدارة الشركات، وتخفيف المخاطر، والامتثال التنظيمي لمعايير المملكة المتحدة والاتحاد الأوروبي الخاصة بالمنافسة وحماية البيانات.</li>
              <li>مراجعة وتقديم المشورة بشأن اتفاقيات مشاريع التمويل الشخصي ووثائق الضمان، واتفاقيات الضمانات واتفاقيات التواصل.</li>
              <li>الصياغة ، والتفاوض ، وتقديم المشورة بشأن الاتفاقات التجارية المتعلقة بإدارة المرافق ، والاستعانة بمصادر خارجية عامة ، وتطوير البرمجيات ، وتكنولوجيا المعلومات ، والرواتب.</li>
              <li>تقديم المشورة بشأن مسائل الإعسار ومسؤولية المدير والتعويضات وعملية وضع الشركة في التصفية.</li>
              <li>الاستشارة في قضايا الأسهم مثل زيادة رأس المال وخفضه وتقسيم وتوحيد الأسهم وإعادة توزيع الأسهم ؛ كما قدم المشورة بشأن السلطات التنفيذية ومجلس الإدارة وسلطات المساهمين.</li>
            </ul>
            </>
            }
          </CardComponent>
          <CardComponent title={language==="en"?`BLAKE MORGAN ASSIGNMENT`:`العمل مع بليك مورغان`}>
          {language==="en"?<><ul>
              <li>
                While maintaining all regular duties and responsibilities, also
                served as Trainee Solicitor to Blake Morgan on secondment;
                worked with corporate, real estate, and litigation departments
                during this time
              </li>
              <li>
                Handled joint venture agreements, prepared sales and purchase
                agreements for acquisitions and divestures, advised on financial
                assistance and white wash procedures, and carried out commercial
                matters for ISS.
              </li>
              <li>
                Managed and negotiated commercial leases for landlord and
                tenants, licenses, rent review memos, renewals, assignments,
                surrenders, dilapidations, acquisitions/disposals of property,
                and exemptions.
              </li>
              <li>
                Prepared particulars of claim for debt, breach of contract, and
                restrictive covenant in employment contracts and negotiated
                settlements where appropriate.
              </li>
            </ul></>:<>
            {/* arabic */}
            <ul>
              <li>مع القيام بجميع الواجبات والمسؤوليات العادية ، عمل أيضًا كمحامي متدرب لبليك مورغان على سبيل الإعارة؛ كما عمل في أقسام الشركات والعقارات والتقاضي خلال هذه الفترة.</li>
              <li>التعامل مع اتفاقيات الشراكة، وإعداد اتفاقيات البيع والشراء لعمليات الاستحواذ والتصفية ، وتقديم المشورة بشأن المساعدة المالية وإجراءات التعهد باستمرار الشركة وملاءتها، وتنفيذ الأمور التجارية لآي اس اس.</li>
              <li>عقود الإيجار التجارية المدارة والمتفاوض عليها للمؤجر والمستأجرين ، والتراخيص، ومذكرات مراجعة الإيجار، والتجديدات، والتنازل، والتخلي والتمديد، والاستحواذ / التصرف في الممتلكات ، والإعفاءات.</li>
              <li>إعداد تفاصيل المطالبة بالديون، والإخلال بالعقود ، والتعهدات المقيدة في عقود العمل والتسويات التفاوضية عند الاقتضاء.</li>
              
            </ul>
            </>
            }
          </CardComponent>
        </div>
      </div>
    </div>
  );
};

export default Section16;
