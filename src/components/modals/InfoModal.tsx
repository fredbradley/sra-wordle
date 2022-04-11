import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Guess the word in 6 tries. After each guess, the colour of the tiles
        will change to show how close your guess was to the word.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="R"
          status="correct"
        />
        <Cell value="A" />
        <Cell value="D" />
        <Cell value="I" />
        <Cell value="O" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter R is in the word and in the correct spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="R" />
        <Cell value="A" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="D"
          status="present"
        />
        <Cell value="I" />
        <Cell value="O" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter D is in the word but in the wrong spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="R" />
        <Cell value="A" />
        <Cell value="D" />
        <Cell isRevealing={true} isCompleted={true} value="I" status="absent" />
        <Cell value="O" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter I is not in the word in any spot.
      </p>

      {/*<p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">*/}
      {/*  You can suggest a word for the list:{' '}*/}
      {/*  <a*/}
      {/*    rel="noreferrer"*/}
      {/*    target="_blank"*/}
      {/*    className="underline font-bold"*/}
      {/*    href="https://docs.google.com/forms/d/e/1FAIpQLSdt99k1MKEWQQpQqXlRlaZmV6MRT7NODPNdkMnjYS5uMHTwiA/viewform?usp=sf_link"*/}
      {/*  >*/}
      {/*    Fill in the form.*/}
      {/*  </a>*/}
      {/*</p>*/}
      {/*<p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">*/}
      {/*  If you want to try making your own version speak to Fred. You can{' '}*/}
      {/*  <a*/}
      {/*    target="_blank"*/}
      {/*    rel="noreferrer"*/}
      {/*    href="https://github.com/cwackerfuss/react-wordle"*/}
      {/*    className="underline font-bold"*/}
      {/*  >*/}
      {/*    check out the source code here*/}
      {/*  </a>{' '}*/}
      {/*</p>*/}
    </BaseModal>
  )
}
