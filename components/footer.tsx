import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Unparalleled Views. Exceptional Style. Nonstop Luxury.
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href="https://www.facebook.com/people/Victory-Apartments-Milimani-Bungoma/100082890684415/"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              Contact Host
            </a>
            <a
              href={`https://www.airbnb.co.uk/rooms/636643604736205502?check_in=2022-06-09&adults=1&guests=1&s=13&unique_share_id=8777ed4f-3656-4497-b19d-da637fe9fc04&_branch_match_id=1106632823503246272&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT0zKS9LLTdU3KcqK8sgtcM0vTAIA6t9WqxsAAAA%3D&source_impression_id=p3_1665125782_7NT4U4TnuICpz9pD`}
              className="mx-3 font-bold hover:underline"
            >
              View on Airbnb
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
