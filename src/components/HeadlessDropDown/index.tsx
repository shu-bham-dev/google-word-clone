import { Popover, Transition } from '@headlessui/react';
import { Fragment } from 'react';

type Option = {
  name: string;
  description?: string;
  href: string;
//   icon: string;
  onClick?: (...args: any) => any;
};

type AppProps = {
  options: Option[];
  placeholder: string;
  disabled?: boolean;
};

const PopoverHeadless: React.FC<AppProps> = ({
  options,
  placeholder,
  disabled
}) => {
  return (
    <div className="">
      <Popover className="">
        {({ open }) => (
          <>
            <Popover.Button
              className='
                group inline-flex items-center rounded-m text-base font-normal text-sm w-full justify-center'
            >
              <span className="mr-4">{placeholder}</span>
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute mt-0.5 z-10 ml-[87px] w-44 -mt-12 transform -translate-x-1/2 sm:px-0 ">
                <div className="w-full overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="relative grid gap-1 py-1 bg-white">
                    <div className="">
                      {options.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          onClick={() => {
                            item.onClick && item.onClick();
                          }}
                          className="flex items-center transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                        >
                          <div className="flex items-center h-8 text-white shrink-0 sm:w-6">
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-900">
                              {item.name}
                            </p>
                            <p className="text-sm text-gray-500">
                              {item.description}
                            </p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
};
export default PopoverHeadless;
