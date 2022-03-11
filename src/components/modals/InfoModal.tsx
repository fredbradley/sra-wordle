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
        Guess the word in 6 tries. After each guess, the colour of the tiles will
        change to show how close your guess was to the word.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="N"
          status="correct"
        />
        <Cell value="O" />
        <Cell value="R" />
        <Cell value="T" />
        <Cell value="H" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter N is in the word and in the correct spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="S" />
        <Cell value="O" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="U"
          status="present"
        />
        <Cell value="T" />
        <Cell value="H" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter U is in the word but in the wrong spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="H" />
        <Cell value="U" />
        <Cell value="M" />
        <Cell isRevealing={true} isCompleted={true} value="E" status="absent" />
        <Cell value="S" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter E is not in the word in any spot.
      </p>

      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
          You can suggest a word for the list: <a rel="noreferrer" target="_blank" className="underline font-bold" href="https://docs.google.com/forms/d/e/1FAIpQLSdt99k1MKEWQQpQqXlRlaZmV6MRT7NODPNdkMnjYS5uMHTwiA/viewform?usp=sf_link">Fill in the form.</a>
      </p>
      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        If you want to try making your own version speak to FRB. You can
          {' '}<a
          target="_blank" rel="noreferrer" href="https://github.com/cwackerfuss/react-wordle"
          className="underline font-bold"
        >
          check out the source code here
        </a>{' '}
      </p>
    </BaseModal>
  )
}
