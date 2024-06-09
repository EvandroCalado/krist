import { screen } from '@testing-library/react';

import { customRender } from 'utils/test-utils';

import { Logo } from '.';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLoaderData: jest.fn(),
}));

describe('Logo', () => {
  it('should render default', () => {
    const mockedData = {
      config: {
        data: {
          attributes: {
            logo: {
              black: { data: { attributes: { url: 'image-black' } } },
              white: { data: { attributes: { url: 'image-white' } } },
            },
          },
        },
      },
    };
    require('react-router-dom').useLoaderData.mockReturnValue(mockedData);

    customRender(<Logo />);

    const logo = screen.getByRole('img');
    const link = screen.getByRole('link');

    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute(
      'src',
      `${mockedData.config.data.attributes.logo.black.data.attributes.url}`,
    );
    expect(logo).not.toHaveAttribute(
      'src',
      `${mockedData.config.data.attributes.logo.white.data.attributes.url}`,
    );
    expect(link).toHaveAttribute('href', '/');
  });

  it('should render with logo white', () => {
    const mockedData = {
      config: {
        data: {
          attributes: {
            logo: {
              black: { data: { attributes: { url: 'image-black' } } },
              white: { data: { attributes: { url: 'image-white' } } },
            },
          },
        },
      },
    };
    require('react-router-dom').useLoaderData.mockReturnValue(mockedData);

    customRender(<Logo isBlack={false} />);

    const logo = screen.getByRole('img');

    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute(
      'src',
      `${mockedData.config.data.attributes.logo.white.data.attributes.url}`,
    );
    expect(logo).not.toHaveAttribute(
      'src',
      `${mockedData.config.data.attributes.logo.black.data.attributes.url}`,
    );
  });

  it('should render a snapshot', () => {
    const mockedData = {
      config: {
        data: {
          attributes: {
            logo: {
              black: { data: { attributes: { url: 'image-black' } } },
              white: { data: { attributes: { url: 'image-white' } } },
            },
          },
        },
      },
    };
    require('react-router-dom').useLoaderData.mockReturnValue(mockedData);

    const { container } = customRender(<Logo isBlack={false} />);

    expect(container).toMatchSnapshot();
  });
});
