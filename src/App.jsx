import { Listbox, Transition } from "@headlessui/react";
import countriesData from "./allCountriesDetail.json";
import React, { useEffect, useState } from "react";
import ReactCountryFlag from "react-country-flag";
function App() {
  const [selectedCountry, setSelectedCountry] = useState();
  const countries = countriesData;

  return (
    <>
      <Listbox
        value={selectedCountry}
        onChange={(val) => setSelectedCountry(val)}
        as="div"
        className="space-y-1 "
      >
        {({ open }) => (
          <>
            <div className="relative ">
              <span className="inline-block w-full rounded-md shadow-sm bg-transparent">
                <div
                  className={`cursor-pointer relative w-[100%] rounded-xl 
                       gray-border pl-3 pr-10 py-2 text-left focus:outline-none transition ease-in-out duration-150
                        sm:text-sm sm:leading-5 border-[rgba(255, 255, 255, 0.35)] border-[1px] border-solid bg-transparent
                         text-white h-10 flex items-center `}
                >
                  <div className="block truncate ">
                    <div className="text-xl mr-1 flex items-center">
                      <Listbox.Button
                        as="div"
                        className="text-black flex  items-center z-10 bg-transparent"
                      >
                        {selectedCountry ? (
                          <>
                            <ReactCountryFlag
                              svg
                              style={{
                                width: "30px",
                                height: "30px",
                                marginRight: 10,
                              }}
                              countryCode={selectedCountry?.isoCode}
                            />
                            <p className="flex gap-[3%] font-bold text-xs lg:text-sm">
                              <span>{selectedCountry?.currency}</span>
                              <span> {selectedCountry?.symbol}</span>
                              {/* <span>{selectedCountry?.name}</span> */}
                              <span>{selectedCountry?.commonName}</span>
                            </p>
                          </>
                        ) : (
                          <p className=" font-bold text-black text-xs lg:text-sm">
                            Select a Currency
                          </p>
                        )}

                        <div className="flex items-center ml-[20px] ">
                          <svg
                            className="pointer-events-none h-[15px] w-[15px] md:h-6 md:w-6 hidden md:block"
                            viewBox="0 0 25 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.9"
                              d="M11.1846 16.3458L6.74298 11.9042C6.20201 11.3632 6.08129 10.7442 6.38082 10.0472C6.67921 9.34907 7.21278 9 7.98153 9H16.7794C17.5482 9 18.0818 9.34907 18.3801 10.0472C18.6797 10.7442 18.559 11.3632 18.018 11.9042L13.5763 16.3458C13.4055 16.5167 13.2204 16.6448 13.0211 16.7302C12.8218 16.8156 12.6083 16.8583 12.3805 16.8583C12.1527 16.8583 11.9392 16.8156 11.7399 16.7302C11.5406 16.6448 11.3555 16.5167 11.1846 16.3458Z"
                              fill="#999DA8"
                            />
                          </svg>
                        </div>
                      </Listbox.Button>

                      <div className="absolute top-0 right-0 h-full flex items-center pr-4">
                        <svg
                          width="16"
                          height="22"
                          className="fill-current"
                          viewBox="0 0 16 22"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8 18C7.46957 18 6.96086 18.2107 6.58579 18.5858C6.21071 18.9609 6 19.4696 6 20C6 20.5304 6.21071 21.0391 6.58579 21.4142C6.96086 21.7893 7.46957 22 8 22C8.53043 22 9.03914 21.7893 9.41421 21.4142C9.78929 21.0391 10 20.5304 10 20C10 19.4696 9.78929 18.9609 9.41421 18.5858C9.03914 18.2107 8.53043 18 8 18ZM2 0C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2C0 2.53043 0.210714 3.03914 0.585786 3.41421C0.960859 3.78929 1.46957 4 2 4C2.53043 4 3.03914 3.78929 3.41421 3.41421C3.78929 3.03914 4 2.53043 4 2C4 1.46957 3.78929 0.960859 3.41421 0.585786C3.03914 0.210714 2.53043 0 2 0ZM2 6C1.46957 6 0.960859 6.21071 0.585786 6.58579C0.210714 6.96086 0 7.46957 0 8C0 8.53043 0.210714 9.03914 0.585786 9.41421C0.960859 9.78929 1.46957 10 2 10C2.53043 10 3.03914 9.78929 3.41421 9.41421C3.78929 9.03914 4 8.53043 4 8C4 7.46957 3.78929 6.96086 3.41421 6.58579C3.03914 6.21071 2.53043 6 2 6ZM2 12C1.46957 12 0.960859 12.2107 0.585786 12.5858C0.210714 12.9609 0 13.4696 0 14C0 14.5304 0.210714 15.0391 0.585786 15.4142C0.960859 15.7893 1.46957 16 2 16C2.53043 16 3.03914 15.7893 3.41421 15.4142C3.78929 15.0391 4 14.5304 4 14C4 13.4696 3.78929 12.9609 3.41421 12.5858C3.03914 12.2107 2.53043 12 2 12ZM14 4C14.5304 4 15.0391 3.78929 15.4142 3.41421C15.7893 3.03914 16 2.53043 16 2C16 1.46957 15.7893 0.960859 15.4142 0.585786C15.0391 0.210714 14.5304 0 14 0C13.4696 0 12.9609 0.210714 12.5858 0.585786C12.2107 0.960859 12 1.46957 12 2C12 2.53043 12.2107 3.03914 12.5858 3.41421C12.9609 3.78929 13.4696 4 14 4ZM8 12C7.46957 12 6.96086 12.2107 6.58579 12.5858C6.21071 12.9609 6 13.4696 6 14C6 14.5304 6.21071 15.0391 6.58579 15.4142C6.96086 15.7893 7.46957 16 8 16C8.53043 16 9.03914 15.7893 9.41421 15.4142C9.78929 15.0391 10 14.5304 10 14C10 13.4696 9.78929 12.9609 9.41421 12.5858C9.03914 12.2107 8.53043 12 8 12ZM14 12C13.4696 12 12.9609 12.2107 12.5858 12.5858C12.2107 12.9609 12 13.4696 12 14C12 14.5304 12.2107 15.0391 12.5858 15.4142C12.9609 15.7893 13.4696 16 14 16C14.5304 16 15.0391 15.7893 15.4142 15.4142C15.7893 15.0391 16 14.5304 16 14C16 13.4696 15.7893 12.9609 15.4142 12.5858C15.0391 12.2107 14.5304 12 14 12ZM14 6C13.4696 6 12.9609 6.21071 12.5858 6.58579C12.2107 6.96086 12 7.46957 12 8C12 8.53043 12.2107 9.03914 12.5858 9.41421C12.9609 9.78929 13.4696 10 14 10C14.5304 10 15.0391 9.78929 15.4142 9.41421C15.7893 9.03914 16 8.53043 16 8C16 7.46957 15.7893 6.96086 15.4142 6.58579C15.0391 6.21071 14.5304 6 14 6ZM8 6C7.46957 6 6.96086 6.21071 6.58579 6.58579C6.21071 6.96086 6 7.46957 6 8C6 8.53043 6.21071 9.03914 6.58579 9.41421C6.96086 9.78929 7.46957 10 8 10C8.53043 10 9.03914 9.78929 9.41421 9.41421C9.78929 9.03914 10 8.53043 10 8C10 7.46957 9.78929 6.96086 9.41421 6.58579C9.03914 6.21071 8.53043 6 8 6ZM8 0C7.46957 0 6.96086 0.210714 6.58579 0.585786C6.21071 0.960859 6 1.46957 6 2C6 2.53043 6.21071 3.03914 6.58579 3.41421C6.96086 3.78929 7.46957 4 8 4C8.53043 4 9.03914 3.78929 9.41421 3.41421C9.78929 3.03914 10 2.53043 10 2C10 1.46957 9.78929 0.960859 9.41421 0.585786C9.03914 0.210714 8.53043 0 8 0Z"
                            fill="white"
                            fillOpacity="0.35"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </span>

              <Transition
                show={open}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                className="absolute translate-y-[101%] bottom-0 z-[100] w-full rounded-md border-[rgba(255, 255, 255, 0.35)] border-[1px] border-solid shadow-lg bg-blueLightColor"
              >
                <Listbox.Options
                  static
                  className=" max-h-60 rounded-md py-1 text-base leading-6 shadow-xs overflow-auto focus:outline-none sm:text-sm sm:leading-5 bg-blueLightColor px-0 "
                >
                  {countries.map((c, index) => (
                    <Listbox.Option key={index} value={c}>
                      {({ selected }) => (
                        <div
                          style={{ zIndex: 600 }}
                          className={`hover:bg-blueDarkColor cursor-default select-none relative py-2 pl-2 pr-4`}
                        >
                          <span
                            className={`${
                              selected ? "font-semibold" : "font-normal"
                            } block truncate text-xs lg:text-sm`}
                          >
                            <ReactCountryFlag
                              svg
                              style={{
                                width: "30px",
                                height: "30px",
                                marginRight: 10,
                              }}
                              countryCode={c.isoCode}
                            />
                            {/* {c?.name} */}
                            {c?.currency} {c?.symbol} {c?.commonName}
                          </span>
                        </div>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
    </>
  );
}

export default App;
