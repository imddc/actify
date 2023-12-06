import React from 'react'
import { Menu } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useAppStore } from '@/store/appStore'
import { useShallow } from 'zustand/react/shallow'
import { Button, Spacer, IconButton } from 'actify'
import { Gamepad2, Palette } from 'lucide-react'
import Logo from '@/components/Logo'
import Search from '@/components/Search'
import Dropdown from '@/components/Dropdown'
import SwitchTheme from '@/components/SwitchTheme'
import { updateTheme } from 'tailwind-material-colors/lib/updateTheme.esm'

const Header: React.FC<React.HTMLAttributes<HTMLElement>> = () => {
  const { pathname } = useLocation()
  const { top, drawer, setDrawer } = useAppStore(
    useShallow((state) => ({
      top: state.top,
      drawer: state.drawer,
      setDrawer: state.setDrawer
    }))
  )

  const randomColor = () => {
    const letters = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]
    }
    return color
  }

  const handleUpdateTheme = () => {
    updateTheme(
      {
        // set a new primary color (and optionally any other colors in your theme)
        primary: randomColor()
      },
      // second argument is your chosen dark mode strategy (usually 'media' or 'class')
      'class'
    )
  }

  return (
    <header
      style={{ height: top }}
      className="sticky top-0 z-30 h-16 row-start-1 row-end-2 col-start-1 col-end-4 bg-surface/25 px-2 shadow backdrop-blur"
    >
      <div className="mx-auto flex h-full flex-wrap items-center justify-between">
        <Link to="/" className="hidden md:flex items-center text-primary">
          <Logo height={36} />
          <span className="self-center whitespace-nowrap text-2xl font-semibold">
            ctify
          </span>
        </Link>
        {pathname != '/' && (
          <IconButton
            className="inline-flex md:hidden"
            onClick={() => setDrawer(!drawer)}
          >
            <Menu color="primary" />
          </IconButton>
        )}
        <Search
          indexName="actify"
          appId="QT1V8AWXWR"
          apiKey="aea069649b0718ada66d001637c44dbf"
        />
        <Spacer />
        <Link to="/" className="flex md:hidden items-center text-primary">
          <Logo height={24} />
          <span className="self-center whitespace-nowrap font-semibold">
            ctify
          </span>
        </Link>
        <Spacer />
        <Link to="/playground" className="block md:hidden">
          <IconButton>
            <Gamepad2 />
          </IconButton>
        </Link>
        <IconButton onClick={handleUpdateTheme} color="primary">
          <Palette />
        </IconButton>
        <SwitchTheme />
        <div className="hidden w-full md:block md:w-auto">
          <ul className="flex flex-row gap-2 font-medium">
            <li>
              <Dropdown
                title="Learn"
                items={[
                  {
                    headline: 'Get Started',
                    to: '/getting-started/installation'
                  },
                  {
                    headline: 'Examples',
                    to: '/examples'
                  }
                ]}
              />
            </li>
            <li>
              <Dropdown
                title="Support"
                items={[
                  {
                    headline: 'GitHub',
                    target: '_blank',
                    to: 'https://github.com/actifyjs/actify'
                  },
                  {
                    headline: 'Actify Admin',
                    to: '/admin'
                  }
                ]}
              />
            </li>
            <li>
              <Link to="/playground">
                <Button variant="text">Playground</Button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
