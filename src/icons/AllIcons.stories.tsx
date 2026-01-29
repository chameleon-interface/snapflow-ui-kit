import type { ComponentType, SVGProps } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import {
  AllDoneIcon,
  ArrowBackIcon,
  ArrowDownIcon,
  ArrowFowardIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  BlockIcon,
  BookMarkIcon,
  CalendarIcon,
  CheckmarkIcon,
  CloseIcon,
  ColorPalleteIcon,
  CopyIcon,
  CreditCardIcon,
  EditIcon,
  EmailIcon,
  ExpandIcon,
  EyeIcon,
  EyeOffIcon,
  FacebookLogo,
  FlagRussia,
  FlagUK,
  GitHubIcon,
  GoogleLogo,
  HomeIcon,
  ImageIcon,
  LayersIcon,
  LikeIcon,
  LogOutIcon,
  MaximizeIcon,
  MessageIcon,
  MicIcon,
  MoreHozitontalIcon,
  PaidIcon,
  PaperPlaneIcon,
  PauseCircleIcon,
  PayPalLogo,
  PersonAddIcon,
  PersonIcon,
  PersonRemoveIcon,
  PinIcon,
  PlayCircleIcon,
  PlusCirceIcon,
  PlusSquareIcon,
  RecaptchaLogo,
  SearchIcon,
  SettingsIcon,
  StripeLogo,
  TrashIcon,
  TrendingUpIcon,
} from './'

type IconEntry = {
  name: string
  Component: ComponentType<
    SVGProps<SVGSVGElement> & { type?: 'stroke' | 'filled'; checked?: boolean }
  >
  hasVariants: boolean
}

const icons: IconEntry[] = [
  { name: 'BookMarkIcon', Component: BookMarkIcon, hasVariants: true },
  { name: 'CalendarIcon', Component: CalendarIcon, hasVariants: true },
  { name: 'EyeIcon', Component: EyeIcon, hasVariants: true },
  { name: 'EyeOffIcon', Component: EyeOffIcon, hasVariants: true },
  { name: 'HomeIcon', Component: HomeIcon, hasVariants: true },
  { name: 'LayersIcon', Component: LayersIcon, hasVariants: true },
  { name: 'LogOutIcon', Component: LogOutIcon, hasVariants: false },
  { name: 'MessageIcon', Component: MessageIcon, hasVariants: true },
  { name: 'MicIcon', Component: MicIcon, hasVariants: true },
  { name: 'MoreHozitontalIcon', Component: MoreHozitontalIcon, hasVariants: false },
  { name: 'PaperPlaneIcon', Component: PaperPlaneIcon, hasVariants: false },
  { name: 'PersonAddIcon', Component: PersonAddIcon, hasVariants: true },
  { name: 'PersonIcon', Component: PersonIcon, hasVariants: true },
  { name: 'PersonRemoveIcon', Component: PersonRemoveIcon, hasVariants: true },
  { name: 'PlusSquareIcon', Component: PlusSquareIcon, hasVariants: true },
  { name: 'TrendingUpIcon', Component: TrendingUpIcon, hasVariants: false },
  { name: 'AllDoneIcon', Component: AllDoneIcon, hasVariants: false },
  { name: 'ArrowBackIcon', Component: ArrowBackIcon, hasVariants: false },
  { name: 'ArrowDownIcon', Component: ArrowDownIcon, hasVariants: false },
  { name: 'ArrowFowardIcon', Component: ArrowFowardIcon, hasVariants: false },
  { name: 'ArrowLeftIcon', Component: ArrowLeftIcon, hasVariants: false },
  { name: 'ArrowRightIcon', Component: ArrowRightIcon, hasVariants: false },
  { name: 'ArrowUpIcon', Component: ArrowUpIcon, hasVariants: false },
  { name: 'BlockIcon', Component: BlockIcon, hasVariants: false },
  { name: 'CheckmarkIcon', Component: CheckmarkIcon, hasVariants: false },
  { name: 'CloseIcon', Component: CloseIcon, hasVariants: false },
  { name: 'ColorPalleteIcon', Component: ColorPalleteIcon, hasVariants: false },
  { name: 'CopyIcon', Component: CopyIcon, hasVariants: true },
  { name: 'CreditCardIcon', Component: CreditCardIcon, hasVariants: true },
  { name: 'EditIcon', Component: EditIcon, hasVariants: true },
  { name: 'EmailIcon', Component: EmailIcon, hasVariants: true },
  { name: 'ExpandIcon', Component: ExpandIcon, hasVariants: false },
  { name: 'ImageIcon', Component: ImageIcon, hasVariants: true },
  { name: 'MaximizeIcon', Component: MaximizeIcon, hasVariants: true },
  { name: 'LikeIcon', Component: LikeIcon, hasVariants: true },
  { name: 'PauseCircleIcon', Component: PauseCircleIcon, hasVariants: true },
  { name: 'PinIcon', Component: PinIcon, hasVariants: true },
  { name: 'PlayCircleIcon', Component: PlayCircleIcon, hasVariants: true },
  { name: 'PlusCirceIcon', Component: PlusCirceIcon, hasVariants: true },
  { name: 'SearchIcon', Component: SearchIcon, hasVariants: false },
  { name: 'SettingsIcon', Component: SettingsIcon, hasVariants: true },
  { name: 'TrashIcon', Component: TrashIcon, hasVariants: true },
  { name: 'FacebookLogo', Component: FacebookLogo, hasVariants: false },
  { name: 'FlagRussia', Component: FlagRussia, hasVariants: false },
  { name: 'FlagUK', Component: FlagUK, hasVariants: false },
  { name: 'GitHubIcon', Component: GitHubIcon, hasVariants: false },
  { name: 'GoogleLogo', Component: GoogleLogo, hasVariants: false },
  { name: 'PaidIcon', Component: PaidIcon, hasVariants: false },
  { name: 'PayPalLogo', Component: PayPalLogo, hasVariants: false },
  { name: 'RecaptchaLogo', Component: RecaptchaLogo, hasVariants: false },
  { name: 'StripeLogo', Component: StripeLogo, hasVariants: false },
]

type IconGalleryProps = {
  type: 'stroke' | 'filled'
}

const logoIconNames = new Set([
  'FacebookLogo',
  'GitHubIcon',
  'GoogleLogo',
  'PaidIcon',
  'PayPalLogo',
  'RecaptchaLogo',
  'StripeLogo',
])

const logoIcons = icons.filter((icon) => logoIconNames.has(icon.name))
const nonLogoIcons = icons.filter((icon) => !logoIconNames.has(icon.name))
const iconsWithVariants = nonLogoIcons.filter((icon) => icon.hasVariants)
const iconsWithoutVariants = nonLogoIcons.filter((icon) => !icon.hasVariants)

const IconGallery = ({ type }: IconGalleryProps) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
    <div>
      <h3 style={{ margin: '0 0 16px', fontSize: '14px', fontWeight: 600 }}>
        With variants (stroke/filled)
      </h3>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
          gap: '24px',
        }}
      >
        {iconsWithVariants.map(({ name, Component }) => (
          <div
            key={name}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <Component type={type} style={{ width: 32, height: 32 }} />
            <span style={{ fontSize: '12px', color: '#666' }}>{name}</span>
          </div>
        ))}
      </div>
    </div>
    <div>
      <h3 style={{ margin: '0 0 16px', fontSize: '14px', fontWeight: 600 }}>Single state</h3>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
          gap: '24px',
        }}
      >
        {iconsWithoutVariants.map(({ name, Component }) => (
          <div
            key={name}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <Component style={{ width: 32, height: 32 }} />
            <span style={{ fontSize: '12px', color: '#666' }}>{name}</span>
          </div>
        ))}
      </div>
    </div>
    <div>
      <h3 style={{ margin: '0 0 16px', fontSize: '14px', fontWeight: 600 }}>Logos</h3>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
          gap: '24px',
        }}
      >
        {logoIcons.map(({ name, Component }) => (
          <div
            key={name}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <Component style={{ width: 40, height: 40 }} />
            <span style={{ fontSize: '12px', color: '#666' }}>{name}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
)

const meta = {
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A gallery of all available icons in the library.',
      },
    },
  },
  argTypes: {
    type: {
      control: { type: 'radio' },
      options: ['stroke', 'filled'],
      description: 'Visual style of all icons',
      table: { defaultValue: { summary: 'stroke' } },
    },
  },
  component: IconGallery,
  tags: ['autodocs'],
  title: 'Icons/0. All Icons',
} satisfies Meta<typeof IconGallery>

export default meta
type Story = StoryObj<typeof meta>

/** All icons in stroke (outline) style. */
export const Stroke: Story = {
  args: {
    type: 'stroke',
  },
}

/** All icons in filled style. */
export const Filled: Story = {
  args: {
    type: 'filled',
  },
}
