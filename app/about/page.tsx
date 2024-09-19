import { Authors, allAuthors } from 'contentlayer/generated'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'About' })

export default function Page() {
  return (
    <>
      <div className="flex h-full flex-col divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center space-x-2 pt-8">
            <h3 className="pb-2 pt-4 text-2xl font-bold leading-8 tracking-tight">
              Alireza Taghavi
            </h3>
            <div className="text-gray-500 dark:text-gray-400">Software Engineer</div>
          </div>
          <div className="prose max-w-none pb-8 pt-8 text-justify dark:prose-invert xl:col-span-2">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt, metus a
              interdum aliquam, purus lacus dignissim nulla, vitae fermentum libero tortor ut dui.
              Donec ut bibendum nisi. Mauris auctor lorem non nisi feugiat, non laoreet nunc
              vehicula. Ut accumsan augue ut nunc hendrerit, vel feugiat ligula elementum. In
              finibus orci in dui volutpat, quis congue nulla blandit. Morbi quis felis sit amet
              felis congue mollis non non ligula. Aliquam erat volutpat. Donec tincidunt
              sollicitudin nisi, ut tristique turpis sagittis nec. Suspendisse congue nibh sit amet
              mauris cursus, vel tempor erat cursus. <br /> Nam eget consequat velit, vel fermentum
              felis. Vivamus at libero quis felis eleifend sagittis. Integer fermentum convallis
              velit. Aenean vel orci nec augue luctus aliquam. Nulla a accumsan ligula, vel placerat
              lorem. Vestibulum venenatis suscipit quam, sit amet porttitor erat tincidunt a.
              Quisque porttitor risus et lorem viverra ultricies. Integer vel lectus nec enim
              fermentum fermentum. <br /> Pellentesque ultricies felis quis ante consectetur, id
              sodales eros convallis. Suspendisse potenti. Nulla in convallis nulla. Sed vestibulum
              pretium elit, sit amet congue elit tristique sit amet. Duis a ante ex. Nam in mi
              fermentum, bibendum eros in, aliquam augue. Ut rutrum odio sed urna dignissim
              vulputate. Nulla aliquam urna sed malesuada sodales. Nulla et luctus felis, non
              convallis purus. Aenean dictum auctor mauris, ac ullamcorper elit cursus ut. Aliquam
              non sagittis erat. Etiam imperdiet nunc ex, et varius nunc porta eget. Nunc nec sapien
              id eros facilisis rhoncus ac in felis. Cras id sem lacus. Mauris molestie orci turpis,
              quis dignissim nibh feugiat quis. Cras nec viverra purus. Vestibulum ante ipsum primis
              in.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
