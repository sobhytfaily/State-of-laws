import TestimonialSlider05 from "../../components/slider/TestimonialSlider05"
import Layout from "../../components/layout/Layout"
import Link from "next/link"

export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="أين ومتى تصوت">
                <div>

                    {/* Hero / banner that matches reference image */}
                    {/* <section className="page-title" style={{backgroundImage: 'url(/assets/images/resources/departments-details-img1.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                        <div className="overlay" style={{background: 'rgba(0,0,0,0.25)', padding: '70px 0'}}>
                            <div className="auto-container text-center">
                                <h1 style={{color: '#fff', fontSize: '32px', fontWeight: 600}}>أين ومتى تصوت؟</h1>
                            </div>
                        </div>
                    </section> */}

                    {/* Breadcrumb
                    <div className="auto-container" style={{paddingTop: '20px'}}>
                        <div className="breadcrumb">
                            <Link href="/">Home</Link> <span> / </span> <span>Health & Medical Department</span>
                        </div>
                    </div> */}

                    {/* Main content */}
                    <section className="departments-details" style={{padding: '40px 0'}}>
                        <div className="auto-container">
                            <div className="row align-items-start">

                                {/* Left sidebar card */}
                                <div className="col-xl-4 col-lg-4">
                                    <aside className="sidebar-card">
                                            <h4>All Departments</h4>
                                            <ul className="departments-list">
                                                <li><Link href="#">أين ومتى تصوت؟</Link></li>
                                                <li><Link href="#">خدمة الصحة العامة</Link></li>
                                                <li><Link href="#">روابط مفيدة</Link></li>
                                            </ul>
                                        </aside>
                                </div>

                                {/* Right content area */}
                                <div className="col-xl-8 col-lg-8">
                                    <div className="content-area">
                                        <div className="hero-img" style={{overflow: 'hidden', borderRadius: 12}}>
                                            <img src="/assets/images/resources/departments-details-img1.jpg" alt="" style={{width: '100%', display: 'block'}} />
                                        </div>

                                        <div style={{height: 16}} />

                                        <p style={{color: '#666', lineHeight: 1.8}}>هذا وصف تجريبي للقسم. يمكنك استبداله بنص حقيقي من المحتوى الإداري المتعلق بالقسم. يتم وضع الفقرات هنا لتتناسب مع تصميم الصفحة المرجع sdklfjaslkjdfksjdlkadfjalskdfja klasdfjlaksj slajl ad jlkfajsdlfkasjd lkfja slkdfj alsk dl jasldj fية.</p>

                                        <div className="row">
                                            <div className="col-xl-12">
                                                <div className="voting-info-section">
                                                    <div className="voting-info-image">
                                                        <img src="/assets/images/resources/departments-details-img2.jpg" alt="" />
                                                    </div>
                                                    <div className="voting-info-content">
                                                        <h3>ساعات الاقتراع</h3>
                                                        <p>تُفتَح مراكز التصويت في جميع المحافظات من الساعة 7:00 صباحاً وحتى 6:00 مساءً في يوم الاقتراع المحدد. احرص على التوجه مبكراً لتفادي الزحام وضمان وقت كافٍ لإكمال العملية الانتخابية.</p>
                                                        
                                                        <h4 style={{marginTop: 30, marginBottom: 30}}>خطوات المشاركة الفاعلة</h4>
                                                        <ul className="participation-steps">
                                                            <li>
                                                                <span className="check-icon">✓</span>
                                                                حضّر بطاقتك البايومترية أو الانتخابية مسبقاً
                                                            </li>
                                                            <li>
                                                                <span className="check-icon">✓</span>
                                                                تأكد من تفاصيل مركزك قبل يوم الاقتراع
                                                            </li>
                                                            <li>
                                                                <span className="check-icon">✓</span>
                                                                تذكّر أن مشاركتك ليست مجرد إجراء بل ممارسة لحقك الديمقراطي ومساهمة مباشرة في صناعة مستقبل العراق
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>

                </div>

            </Layout>
        </>
    )
}