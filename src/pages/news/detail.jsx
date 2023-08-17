// import React from 'react'
// import Card from "../../components/Card/Card"

import dummyArticles from '../../data/articles'
import SimpleFooter from "../../components/Footer/SimpleFooter"
import Navbar from "../../components/Navbar"
import FlexibleCard from '../../components/Card/FlexibleCard'
import NewsAlert from '../../components/Alert/NewsAlert'

const detail = () => {
  return (
    <>
        <Navbar />
        <NewsAlert opened={true} closeAble={false} />
        <section className='grid grid-cols-12 md:px-10 px-5 mt-6 min-h-[90vh] gap-6 md:gap-12 mb-10 max-w-[100vw]'>
            <div className='md:col-span-8 col-span-12'>
                <div>
                    <img src="https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhY3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" className="w-full h-[18rem] object-cover rounded-xl" />
                </div>
                <div className='my-10'>
                    <h1 className="text-3xl font-bold" style={{ fontWeight: 700 }}>Title For Detail News</h1>
                    <p className="text-gray-500 mt-2">
                        <span >10 hours ago </span>
                         - 
                        <span className='text-'> 20 Desember 2023</span>
                    </p>
                </div>
                <div className="text-gray-800 text-justify text-lg">
                    <p className="">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore vitae expedita voluptatibus veritatis ipsa ipsam corrupti quis. Doloremque architecto iste a placeat? Voluptatibus est id corporis facere, laudantium nam et tempora, nulla maxime earum incidunt illo blanditiis! Deleniti reprehenderit sunt veniam corrupti eveniet assumenda quod aliquam, iure nulla sint. Reiciendis eligendi nihil obcaecati illum, velit eveniet earum nesciunt sapiente voluptas qui repellat fugit ad minima, quasi magni, error aut laborum totam. Dignissimos, vitae deserunt. Ex odit necessitatibus neque architecto accusantium, nihil rerum saepe quod ab totam consectetur animi perspiciatis quia, numquam ea laudantium voluptatibus tempore. Placeat, incidunt est similique nam minus accusantium reiciendis minima. Corporis hic ratione in ut provident porro iusto nam fugit numquam quae excepturi accusamus neque cumque quos, fuga, reprehenderit deserunt! Labore officiis, nulla eum dolor iure eaque sequi mollitia debitis aliquid molestias eius in exercitationem sapiente aliquam, totam id perferendis perspiciatis ducimus magnam. Molestiae ab eligendi suscipit ducimus quis amet consequatur tempore quia consequuntur quidem, iure error, rerum unde voluptate soluta commodi! Blanditiis numquam, mollitia temporibus excepturi esse omnis ipsam sunt cupiditate explicabo dolores. Minima consequuntur commodi, porro repellat autem quod aperiam praesentium dolorum nobis consequatur modi cumque beatae cum odio qui expedita repellendus? Animi necessitatibus velit tempora cupiditate saepe quos nobis provident delectus ut excepturi corporis, maiores aut quasi sunt earum doloremque vero consequuntur a sit modi. Provident itaque recusandae voluptate consequuntur, nostrum officia consequatur ab aliquam maxime alias beatae iusto animi doloribus pariatur tempore mollitia? Consequatur nulla non error laudantium voluptates consectetur asperiores blanditiis, similique veniam nobis dolorum illum, exercitationem doloremque. Aliquam maiores dolorem culpa possimus ut obcaecati ullam iure nemo blanditiis excepturi vero consequuntur ipsum beatae eligendi perspiciatis facere ad laborum illo similique placeat error quia minima, quisquam voluptatibus. Expedita laborum dolorum natus dignissimos minima quaerat quia? Necessitatibus officia cum ex, dolorum eligendi placeat commodi perspiciatis! Incidunt doloremque in atque aliquid quidem hic non cumque. Fuga nostrum harum pariatur soluta distinctio amet labore reiciendis at veritatis error dolor, eius sunt earum saepe hic quod ullam iure ad similique ea fugit accusamus, aut suscipit. Sit, nam? Voluptates cumque nostrum quisquam dolore sit magni tenetur aut illum aliquid consequuntur, omnis soluta ipsa itaque necessitatibus fuga aperiam quibusdam voluptas, hic assumenda vitae nobis, explicabo sed numquam? Molestiae ullam quibusdam iure delectus id quis necessitatibus. Voluptatibus odio voluptatem, vel dignissimos repudiandae nemo! Dolore dolorem ipsam quod doloremque quos reprehenderit excepturi impedit voluptates architecto provident ipsa vero quibusdam aliquid, repellendus illum neque totam. Delectus nesciunt odit tempora perspiciatis dolorem. Cupiditate tempora architecto natus. Placeat dignissimos itaque tempore suscipit repellat reiciendis temporibus saepe quidem, in veritatis! Ab, harum dolore perferendis mollitia unde fugit quae suscipit ut provident? Eligendi totam nesciunt corporis adipisci? Amet reprehenderit architecto fugit, facere sunt consequatur nisi mollitia minima voluptatum obcaecati optio, expedita debitis quae sit dicta perspiciatis, dignissimos quia. Odit, nulla quia vitae perspiciatis voluptas placeat fuga a ea illo, iste quae quas inventore nostrum officiis enim reiciendis facilis expedita esse, necessitatibus itaque. Corporis, obcaecati quia sapiente totam sunt perferendis ea, ipsum distinctio commodi rem maxime iure quibusdam? Voluptatem, modi quod perspiciatis, veniam aliquam ducimus laborum fugiat nam, rerum qui exercitationem autem quam corporis voluptate nesciunt cumque tempora? Iusto, sapiente! Nostrum repellendus aliquid nulla animi quisquam, eos odio ipsam libero quidem rem neque qui dolorum deleniti? Quae nostrum dolor voluptatum fuga perspiciatis ducimus quod dignissimos exercitationem sint nobis sed alias hic incidunt ullam possimus et debitis maiores, eligendi excepturi architecto esse quo corrupti autem blanditiis. Tempore adipisci dolorem ducimus ea atque minus voluptas, expedita facilis fugiat voluptate optio sed id architecto aut, vel exercitationem dignissimos doloremque enim et ex temporibus incidunt debitis. Doloribus mollitia voluptates facilis, soluta corporis facere, iste assumenda quae similique minima eum culpa obcaecati doloremque nesciunt sapiente vitae perspiciatis adipisci ipsam sit, libero nemo? Ad dolores dolore provident est tenetur! Repudiandae excepturi dolores non tenetur explicabo error! Harum impedit unde consequuntur reprehenderit blanditiis? Itaque culpa rem hic, eius animi sequi nobis a officiis ad at neque modi quisquam nihil veniam tempora in quidem. Perferendis harum error explicabo sint eaque quos porro, recusandae, perspiciatis fuga magni esse, consequuntur ab enim odit numquam nemo vel doloribus blanditiis quibusdam ut? Fugit esse voluptates, unde dolorum quo eveniet, non voluptatum obcaecati exercitationem deleniti dolorem enim nesciunt. Iusto illo ab voluptates est excepturi placeat voluptatibus provident tempore hic architecto, quod repellat reiciendis debitis, eum rem illum ex corporis amet blanditiis natus, expedita deserunt possimus adipisci! Porro, neque? Cumque voluptates sint necessitatibus? Corporis ullam vitae tempore libero, consequatur autem quo dicta veniam facilis at ad consequuntur voluptatum atque modi tenetur maiores. Commodi unde nobis quos nam id nisi quasi. Ullam, aliquid? Ad id, odio repudiandae ut perspiciatis vero quia totam praesentium, corporis exercitationem nulla! Nam saepe, maxime sunt ut optio praesentium commodi id fugit ipsa, cumque minus maiores eum quos deleniti fugiat! Ab corporis veritatis totam qui, eos blanditiis iste ipsum saepe, tempora, cumque quidem aliquam! Quibusdam, quam tempora! Dicta nihil nobis voluptas expedita adipisci deleniti mollitia similique incidunt quae. Autem quo debitis repudiandae dolorem molestiae quibusdam soluta alias incidunt? Eius deleniti voluptas ea distinctio quo quis repudiandae aliquam nobis, nam blanditiis, nisi quasi a minima soluta cupiditate magnam sunt tempore suscipit nemo nesciunt dicta, nihil architecto! Rem a alias dolores, inventore velit, vel labore vitae repellendus dolor amet ducimus placeat doloribus accusamus tempora ipsum officia nesciunt deserunt at voluptatibus odit facere id temporibus? Distinctio sit ipsam, soluta omnis ipsum maxime architecto optio! Voluptates odit adipisci sed alias ipsam consequatur, reprehenderit dignissimos quod. Quaerat totam sint ducimus error pariatur nostrum, itaque quibusdam atque nam non sunt iusto harum fugit repellendus accusamus. Quos velit autem vel odit totam laudantium voluptatum quisquam quam fugiat doloremque. Inventore illum labore nisi repudiandae, magnam nostrum sequi. Amet voluptate quae cum eaque laudantium, asperiores molestias culpa eligendi sapiente libero magnam, architecto ex eius mollitia perspiciatis incidunt, fugit deleniti quia vel quod? Culpa quo corrupti tempora at, magnam quia porro illo ea? Facere ullam aperiam veritatis corrupti minus ad reprehenderit quaerat officia culpa laudantium harum, quasi non debitis eligendi similique. Debitis at dignissimos sunt perspiciatis?
                    </p>
                </div>
            </div>
            <div className="md:col-span-4 col-span-12">
                {dummyArticles?.slice(0, 4).map((article, index) => {
                    return (
                        <FlexibleCard
                            key={index}
                            index={index}
                            item={article}
                            toLeft={false}
                            style='md:mb-2 max-md:my-3'
                            thumbStyle=''
                        />
                    )
                })}
            </div>
        </section>
        <SimpleFooter />
    </>
  )
}

export default detail