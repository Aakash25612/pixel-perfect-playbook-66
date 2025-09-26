import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Textarea } from "@/components/ui/textarea";

const Dashboard: React.FC = () => {
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [modelDropdownOpen, setModelDropdownOpen] = useState(false);
  const [selectedModel, setSelectedModel] = useState("fast");

  return (
    <div className="min-h-screen bg-white flex font-inter antialiased">
      {/* Sidebar */}
      {sidebarVisible && (
        <div className="w-64 bg-gray-50 border-r border-gray-200 pt-4 flex flex-col">
          <div className="bg-background-primary overflow-hidden group/sidebar h-full min-h-0  flex flex-col w-full z-50">
            <div className="flex items-center mb-5 px-4">
              <button
                aria-busy="false"
                className="inline-flex items-center select-none relative justify-center whitespace-nowrap ring-offset-background transition-colors focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 box-border text-text-primary hover:bg-control-primary data-[highlighted]:bg-popover-hover data-[highlighted]:text-accent-foreground data-[state=highlighted]:bg-popover-hover group-data-[highlighted]:bg-popover-hover group-data-[highlighted]:text-accent-foreground group-focus:bg-popover-hover group-focus:text-accent-foreground px-4 py-2 rounded-5 data-[state=open]:bg-control-primary focus-visible:outline-none focus-visible:ring-0 text-sm w-fit font-semibold gap-1 h-11"
                type="button"
                id="radix-_r_9_"
                aria-haspopup="menu"
                aria-expanded="false"
                data-state="closed"
              >
                <span className="truncate">
                  <span className="truncate">jasara.pauling</span>
                </span>
                <span className="ml-auto">
                  <span className="shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-chevron-down"
                      aria-hidden="true"
                    >
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </span>
                </span>
              </button>
              <div className="ml-auto flex items-center gap-2">
                <button
                  aria-busy="false"
                  className="inline-flex items-center select-none relative font-semibold justify-center whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 box-border text-text-primary data-[highlighted]:bg-popover-hover data-[highlighted]:text-accent-foreground data-[state=open]:bg-popover-hover data-[state=highlighted]:bg-popover-hover group-data-[highlighted]:bg-popover-hover group-data-[highlighted]:text-accent-foreground group-focus:bg-popover-hover group-focus:text-accent-foreground h-11 w-11 rounded-4 hover:bg-control-primary md:group-hover/sidebar:opacity-100 md:opacity-0 transition-all duration-200 ease-in-out"
                  id="upload-button"
                  aria-label="Toggle sidebar"
                  onClick={() => setSidebarVisible(false)}
                >
                  <span className="shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-chevrons-left transition-transform duration-200 rotate-0 group-data-[peeking=true]/leftnav:rotate-180"
                      aria-hidden="true"
                    >
                      <path d="m11 17-5-5 5-5"></path>
                      <path d="m18 17-5-5 5-5"></path>
                    </svg>
                  </span>
                </button>
                <input
                  id="plus-menu-file-input"
                  className="hidden"
                  multiple
                  accept=".pdf,.doc,.docx,.ppt,.pptx,.md,.txt,.epub,.png,.jpg,.jpeg,.tiff,.bmp,.heic,.mp4,.mp3,.wav"
                  type="file"
                />
                <input
                  id="plus-menu-folder-input"
                  className="hidden"
                  multiple
                  {...({ webkitdirectory: "true" } as any)}
                  type="file"
                />
                <button
                  aria-busy="false"
                  className="inline-flex items-center select-none relative font-semibold justify-center whitespace-nowrap text-sm ring-offset-background transition-colors focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 box-border bg-secondary text-secondary-foreground hover:bg-secondary-hover h-11 w-11 rounded-4 data-[state=open]:bg-control-primary focus-visible:outline-none focus-visible:ring-0"
                  type="button"
                  id="radix-_r_1m_"
                  aria-haspopup="menu"
                  aria-expanded="false"
                  data-state="closed"
                >
                  <span className="truncate">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-plus"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5v14"></path>
                    </svg>
                  </span>
                </button>
              </div>
            </div>

            {/* Navigation */}
            <div className="p-4 space-y-1">
              <button className="inline-flex items-center select-none relative whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 box-border hover:bg-control-primary focus:bg-popover-hover focus:text-accent-foreground data-[highlighted]:bg-popover-hover data-[highlighted]:text-accent-foreground overflow-hidden font-medium w-full text-text-primary justify-start text-sm px-4 py-2 h-9.5 rounded-5 rounded-4 gap-3 duration-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-house flex-shrink-0 text-text-primary"
                  aria-hidden="true"
                >
                  <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                  <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                </svg>
                <span>Home</span>
              </button>
              <button className="inline-flex items-center select-none relative whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 box-border hover:bg-control-primary focus:bg-popover-hover focus:text-accent-foreground data-[highlighted]:bg-popover-hover data-[highlighted]:text-accent-foreground overflow-hidden font-medium w-full text-text-primary justify-start text-sm px-4 py-2 h-9.5 rounded-5 rounded-4 gap-3 duration-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-rows3 lucide-rows-3 flex-shrink-0 text-text-primary"
                  aria-hidden="true"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                  <path d="M21 9H3"></path>
                  <path d="M21 15H3"></path>
                </svg>
                <span>Library</span>
              </button>
              <button className="inline-flex items-center select-none relative whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 box-border hover:bg-control-primary focus:bg-popover-hover focus:text-accent-foreground data-[highlighted]:bg-popover-hover data-[highlighted]:text-accent-foreground overflow-hidden font-medium w-full text-text-primary justify-start text-sm px-4 py-2 h-9.5 rounded-5 rounded-4 gap-3 duration-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-search flex-shrink-0 text-text-primary"
                  aria-hidden="true"
                >
                  <path d="m21 21-4.34-4.34"></path>
                  <circle cx="11" cy="11" r="8"></circle>
                </svg>
                <span>Search</span>
              </button>
            </div>

            {/*         
            <div className="px-4 py-2">
              <button className="flex items-center space-x-2 text-xs font-medium text-gray-500 hover:text-gray-700 w-full">
                <svg
                  className="w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
                <span>Chats</span>
              </button>
              <p className="text-xs text-gray-500 mt-2 px-5">
                No chats available
              </p>
            </div>

            <div className="px-4 py-2">
              <button className="flex items-center space-x-2 text-xs font-medium text-gray-500 hover:text-gray-700 w-full">
                <svg
                  className="w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
                <span>Folders</span>
              </button>
              <button className="flex items-center space-x-2 text-xs text-gray-600 hover:bg-gray-100 rounded-md px-2 py-1 w-full mt-1">
                <svg
                  className="w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                  />
                </svg>
                <span>Age reversal research</span>
              </button>
            </div> */}

            <div className="flex-1 min-h-0 overflow-y-scroll px-4 space-y-1 select-none scrollbar-overlay">
              {/* Chats Section */}
              <div className="flex flex-col group/chats gap-1">
                <div
                  aria-busy="false"
                  className="inline-flex items-center select-none relative whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 box-border hover:bg-control-primary focus:bg-popover-hover focus:text-accent-foreground data-[highlighted]:bg-popover-hover data-[highlighted]:text-accent-foreground overflow-hidden w-full justify-start px-4 py-2 rounded-5 rounded-4 gap-3 duration-0 group/chat-header h-9.5 text-text-secondary font-semibold text-[13px]"
                  tabIndex={0}
                  role="button"
                  aria-expanded="true"
                  aria-controls="chats-content"
                >
                  <span className="shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-chevron-right text-text-secondary flex-shrink-0 transition-transform duration-200 ease-out rotate-90"
                      aria-hidden="true"
                    >
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                  </span>
                  <span className="truncate">Chats</span>
                  <span className="ml-auto">
                    <span className="shrink-0 ml-auto">
                      <button
                        aria-busy="false"
                        className="inline-flex items-center select-none font-semibold justify-center whitespace-nowrap text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 box-border text-text-primary data-[highlighted]:bg-popover-hover data-[highlighted]:text-accent-foreground data-[state=open]:bg-popover-hover data-[state=highlighted]:bg-popover-hover group-data-[highlighted]:bg-popover-hover group-data-[highlighted]:text-accent-foreground group-focus:bg-popover-hover group-focus:text-accent-foreground rounded-4 group-hover/chat-header:visible group-hover/chats:visible group-focus-within/chat-header:visible group-focus-within/chats:visible size-9 hover:bg-secondary focus:outline-none invisible absolute right-1 top-1/2 -translate-y-1/2"
                        aria-label="Create a new chat"
                        data-state="closed"
                        type="button"
                      >
                        <span className="truncate">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15"
                            height="15"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-plus"
                            aria-hidden="true"
                          >
                            <path d="M5 12h14"></path>
                            <path d="M12 5v14"></path>
                          </svg>
                        </span>
                      </button>
                    </span>
                  </span>
                </div>
                <div
                  id="chats-content"
                  className="overflow-hidden"
                  style={{ height: "auto", opacity: 1 }}
                >
                  <div className="space-y-1 select-none" style={{ opacity: 1 }}>
                    <div style={{ opacity: 1, transform: "none" }}>
                      <p className="text-text-secondary py-3 pl-4 text-sm">
                        No chats available
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Folders Section */}
              <div className="flex flex-col min-h-0 gap-1 group/sidebar-chatbots">
                <div
                  aria-busy="false"
                  className="inline-flex items-center select-none relative whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 box-border hover:bg-control-primary focus:bg-popover-hover focus:text-accent-foreground data-[highlighted]:bg-popover-hover data-[highlighted]:text-accent-foreground overflow-hidden w-full justify-start px-4 py-2 rounded-5 rounded-4 gap-3 duration-0 group/folder-header h-9.5 text-text-secondary font-semibold text-[13px]"
                  tabIndex={0}
                  role="button"
                  aria-expanded="true"
                  aria-controls="folders-content"
                >
                  <span className="shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-chevron-right text-text-secondary flex-shrink-0 transition-transform duration-200 ease-out rotate-90"
                      aria-hidden="true"
                    >
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                  </span>
                  <span className="truncate">Folders</span>
                  <span className="ml-auto">
                    <span className="shrink-0 ml-auto">
                      <button
                        aria-busy="false"
                        className="inline-flex items-center select-none font-semibold justify-center whitespace-nowrap text-sm ring-offset-background transition-colors focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 box-border text-text-primary data-[highlighted]:bg-popover-hover data-[highlighted]:text-accent-foreground data-[state=highlighted]:bg-popover-hover group-data-[highlighted]:bg-popover-hover group-data-[highlighted]:text-accent-foreground group-focus:bg-popover-hover group-focus:text-accent-foreground rounded-4 data-[state=open]:bg-control-primary focus-visible:outline-none focus-visible:ring-0 group-hover/sidebar-chatbots:visible group-hover/chats:visible group-focus-within/chat-header:visible group-focus-within/chats:visible group-hover/folder-header:visible group-focus-within/folder-header:visible size-9 hover:bg-secondary focus:outline-none invisible absolute right-1 top-1/2 -translate-y-1/2"
                        id="create-button"
                        aria-label="Create a new folder"
                        type="button"
                        aria-haspopup="menu"
                        aria-expanded="false"
                        data-state="closed"
                      >
                        <span className="shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15"
                            height="15"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-plus"
                            aria-hidden="true"
                          >
                            <path d="M5 12h14"></path>
                            <path d="M12 5v14"></path>
                          </svg>
                        </span>
                      </button>
                    </span>
                  </span>
                </div>
                <div
                  className="absolute right-0 top-12 w-4 h-4"
                  id="open-folder"
                ></div>
                <div
                  className="overflow-hidden flex flex-col"
                  style={{ height: "auto", opacity: 1 }}
                >
                  <div className="" style={{ opacity: 1, transform: "none" }}>
                    <div className="select-none space-y-1">
                      <div
                        className="TreeItem-module__UmvCcW__Wrapper touch-manipulation select-none relative rounded-4 before:absolute before:inset-0 before:rounded-4 before:border-2 before:border-dashed before:border-transparent before:pointer-events-none"
                        role="button"
                        tabIndex={0}
                        aria-disabled="false"
                        aria-roledescription="sortable"
                        aria-describedby="DndDescribedBy-3"
                      >
                        <div className="flex flex-col">
                          <div
                            className="relative hover:bg-control-primary rounded-4"
                            style={{ paddingLeft: 0 }}
                          >
                            <a href="/b/cmfzaz5nc0000356rr016v0i5">
                              <div
                                aria-busy="false"
                                className="inline-flex items-center select-none relative whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 box-border focus:bg-popover-hover focus:text-accent-foreground data-[highlighted]:bg-popover-hover data-[highlighted]:text-accent-foreground overflow-hidden font-medium text-sm px-4 py-2 h-9.5 rounded-5 rounded-4 gap-3 w-full justify-start text-foreground focus-visible:!outline-none focus-visible:!ring-0 focus-visible:ring-offset-0 hover:bg-muted hover:pr-10"
                              >
                                <span className="shrink-0">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="15"
                                    height="15"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-folder flex-shrink-0 z-10 hover:bg-accent rounded-2"
                                    aria-hidden="true"
                                  >
                                    <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path>
                                  </svg>
                                </span>
                                <span className="truncate">
                                  <span className="text-ellipsis text-text-primary select-none whitespace-nowrap items-center overflow-hidden pr-2">
                                    Age reversal research
                                  </span>
                                </span>
                                <span className="ml-auto">
                                  <span className="shrink-0 ml-4">
                                    <div className="absolute top-1/2 right-1 -translate-y-1/2 z-[999] h-9 flex items-center overflow-hidden group w-10">
                                      <button
                                        aria-busy="false"
                                        className="inline-flex items-center select-none font-semibold justify-center whitespace-nowrap text-sm ring-offset-background transition-colors focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 box-border text-text-primary data-[highlighted]:bg-popover-hover data-[highlighted]:text-accent-foreground data-[state=highlighted]:bg-popover-hover group-data-[highlighted]:bg-popover-hover group-data-[highlighted]:text-accent-foreground group-focus:bg-popover-hover group-focus:text-accent-foreground rounded-4 data-[state=open]:bg-control-primary focus-visible:outline-none focus-visible:ring-0 absolute right-0 size-9 hover:bg-secondary focus:outline-none z-20 invisible group-hover:visible data-[state=open]:visible"
                                        type="button"
                                        id="radix-_r_82_"
                                        aria-haspopup="menu"
                                        aria-expanded="false"
                                        data-state="closed"
                                      >
                                        <span className="truncate">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="15"
                                            height="15"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-ellipsis-vertical"
                                            aria-hidden="true"
                                          >
                                            <circle
                                              cx="12"
                                              cy="12"
                                              r="1"
                                            ></circle>
                                            <circle
                                              cx="12"
                                              cy="5"
                                              r="1"
                                            ></circle>
                                            <circle
                                              cx="12"
                                              cy="19"
                                              r="1"
                                            ></circle>
                                          </svg>
                                        </span>
                                      </button>
                                    </div>
                                  </span>
                                </span>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* DnD accessibility region */}
                <div id="DndDescribedBy-3" style={{ display: "none" }}>
                  To pick up a draggable item, press the space bar. While
                  dragging, use the arrow keys to move the item. Press space
                  again to drop the item in its new position, or press escape to
                  cancel.
                </div>
                <div
                  id="DndLiveRegion-3"
                  role="status"
                  aria-live="assertive"
                  aria-atomic="true"
                  style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: 1,
                    height: 1,
                    margin: -1,
                    border: 0,
                    padding: 0,
                    overflow: "hidden",
                    clip: "rect(0px, 0px, 0px, 0px)",
                    clipPath: "inset(100%)",
                    whiteSpace: "nowrap",
                  }}
                ></div>
              </div>
            </div>

            {/* Bottom Section */}
            {/* <div className="mt-auto p-4 space-y-4">
              <div className="space-y-1">
                <button className="flex items-center space-x-3 text-xs text-gray-600 hover:bg-gray-100 rounded-md px-2 py-1 w-full">
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                    />
                  </svg>
                  <span>Invite and earn</span>
                </button>
                <button className="flex items-center space-x-3 text-xs text-gray-600 hover:bg-gray-100 rounded-md px-2 py-1 w-full">
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 8h10m0 0V6a2 2 0 00-2-2H9a2 2 0 00-2 2v2m10 0v10a2 2 0 01-2 2H9a2 2 0 01-2-2V8m10 0H7"
                    />
                  </svg>
                  <span>Feedback</span>
                </button>
                <button className="flex items-center space-x-3 text-xs text-gray-600 hover:bg-gray-100 rounded-md px-2 py-1 w-full">
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>Support</span>
                </button>
              </div>
            </div> */}
            <div className="flex flex-shrink-0 z-10 flex-col p-4 gap-5">
              <div className="flex flex-col items-center gap-1">
                <button
                  aria-busy="false"
                  className="inline-flex items-center select-none relative whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 box-border hover:bg-control-primary focus:bg-popover-hover focus:text-accent-foreground data-[highlighted]:bg-popover-hover data-[highlighted]:text-accent-foreground overflow-hidden font-medium w-full text-text-primary justify-start text-sm px-4 py-2 h-9.5 rounded-5 rounded-4 gap-3 duration-0"
                >
                  <span className="shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-award flex-shrink-0 text-text-primary"
                      aria-hidden="true"
                    >
                      <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                      <circle cx="12" cy="8" r="6"></circle>
                    </svg>
                  </span>
                  <span className="truncate">Invite and earn</span>
                </button>
                <button
                  aria-busy="false"
                  className="inline-flex items-center select-none relative whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 box-border hover:bg-control-primary focus:bg-popover-hover focus:text-accent-foreground data-[highlighted]:bg-popover-hover data-[highlighted]:text-accent-foreground overflow-hidden font-medium w-full text-text-primary justify-start text-sm px-4 py-2 h-9.5 rounded-5 rounded-4 gap-3 duration-0"
                  type="button"
                  aria-haspopup="dialog"
                  aria-expanded="false"
                  aria-controls="radix-_R_2ulbna9fiv5a5b_"
                  data-state="closed"
                >
                  <span className="shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-thumbs-up flex-shrink-0 text-text-primary"
                      aria-hidden="true"
                    >
                      <path d="M7 10v12"></path>
                      <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"></path>
                    </svg>
                  </span>
                  <span className="truncate">Feedback</span>
                </button>
                <button
                  aria-busy="false"
                  className="inline-flex items-center select-none relative whitespace-nowrap ring-offset-background transition-colors focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 box-border hover:bg-control-primary focus:bg-popover-hover focus:text-accent-foreground data-[highlighted]:bg-popover-hover data-[highlighted]:text-accent-foreground overflow-hidden font-medium w-full text-text-primary justify-start text-sm px-4 py-2 h-9.5 rounded-5 rounded-4 gap-3 data-[state=open]:bg-control-primary focus-visible:outline-none focus-visible:ring-0 duration-0"
                  type="button"
                  aria-haspopup="menu"
                  aria-expanded="false"
                  data-state="closed"
                >
                  <span className="shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-circle-question-mark flex-shrink-0 text-text-primary"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                      <path d="M12 17h.01"></path>
                    </svg>
                  </span>
                  <span className="truncate">Support</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}

        <div className="sticky top-0 z-10 pl-6 pr-4 py-4 h-[45px] flex-shrink-0 w-full flex flex-row justify-between items-center bg-background-primary">
          <div className="flex items-center gap-4">
            {!sidebarVisible && (
              <button
                aria-busy="false"
                className="inline-flex items-center select-none relative font-semibold justify-center whitespace-nowrap text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 box-border text-text-primary hover:bg-control-primary data-[highlighted]:bg-popover-hover data-[highlighted]:text-accent-foreground data-[state=open]:bg-popover-hover data-[state=highlighted]:bg-popover-hover group-data-[highlighted]:bg-popover-hover group-data-[highlighted]:text-accent-foreground group-focus:bg-popover-hover group-focus:text-accent-foreground h-11 w-11 rounded-4"
                onClick={() => setSidebarVisible(true)}
              >
                <span className="truncate">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-panel-left"
                    aria-hidden="true"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                    <path d="M9 3v18"></path>
                  </svg>
                </span>
              </button>
            )}
          </div>
          <div className="flex flex-row items-center gap-6 ml-auto">
            <button
              aria-busy="false"
              className="inline-flex items-center select-none relative font-semibold justify-center whitespace-nowrap text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 box-border bg-secondary text-secondary-foreground hover:bg-secondary-hover px-4 py-2 h-9.5 rounded-5 gap-3"
            >
              <span className="truncate">Upgrade</span>
            </button>
          </div>
        </div>

        {/* <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="flex items-center space-x-2">
          
            <button
              className="p-2 hover:bg-gray-100 rounded-lg"
              title="Back to mosaic"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

          
            <button
              className="p-2 hover:bg-gray-100 rounded-lg"
              onClick={() => setSidebarVisible(!sidebarVisible)}
              title="Toggle sidebar"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </button>
          </div>
          <Button className="bg-black text-white hover:bg-gray-800 text-sm px-4 py-2 !rounded-lg">
            Upgrade
          </Button>
        </div> */}

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col items-center justify-center p-8">
          <div className="max-w-4xl w-full text-center space-y-8">
            {/* GPT-Style Chat Input */}
            <div className="relative w-full max-w-4xl mx-auto">
              <div className="relative border-2 border-gray-100 rounded-2xl bg-white shadow-sm flex z-0 flex-col justify-between gap-2 rounded-8 shadow-feint p-[1px] bg-popover-hover-solid ">
                {/* Text Input Area */}
                <div className="relative px-5 pb-3 pt-2">
                  <Textarea
                    placeholder="Understand, research and write about anything"
                    className="min-h-[20px] w-full resize-none border-0 bg-transparent px-2 py-4 text-base placeholder:text-gray-500 focus:outline-none focus:ring-0 focus:ring-offset-0"
                    style={{ fontSize: "15px" }}
                    rows={1}
                  />
                  {/* <Textarea
                    placeholder="Understand, research and write about anything"
                    className="min-h-[60px] w-full resize-none border-0 bg-transparent px-2 py-2 text-base placeholder:text-gray-500 focus:outline-none focus:ring-0 focus:ring-offset-0"
                    rows={2}
                  /> */}
                  <div className="absolute bottom-5 right-5">
                    <Button className="bg-black text-white hover:bg-gray-800 text-sm px-4 py-2 !rounded-lg">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        />
                      </svg>
                    </Button>
                  </div>
                </div>

                {/* Action Buttons Inside Input */}
                <div className="flex items-center justify-start space-x-3 px-5 pb-5 pb-4">
                  {/* Model Selection Dropdown */}
                  <div className="relative">
                    <Button
                      className="select-none relative justify-center whitespace-nowrap ring-offset-background focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 box-border data-[highlighted]:bg-popover-hover data-[highlighted]:text-accent-foreground data-[state=highlighted]:bg-popover-hover group-data-[highlighted]:bg-popover-hover group-data-[highlighted]:text-accent-foreground group-focus:bg-popover-hover group-focus:text-accent-foreground h-11 rounded-4 data-[state=open]:bg-control-primary focus-visible:outline-none group inline-flex items-center gap-2 px-5 py-2 rounded-4 text-sm font-medium transition-all duration-200 cursor-pointer bg-secondary hover:bg-secondary-hover text-text-primary focus-visible:ring-0 focus-visible:ring-offset-0 w-fit min-w-0 max-w-full"
                      onClick={() => setModelDropdownOpen(!modelDropdownOpen)}
                    >
                      <svg
                        width={12}
                        height={12}
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <circle cx="12" cy="12" r="3" />
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                      </svg>
                      <span>{selectedModel}</span>
                      <svg
                        width={12}
                        height={12}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </Button>

                    {modelDropdownOpen && (
                      <div className="absolute py-2 top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 min-w-[100px]">
                        <div className="py-1">
                          {["fast", "thinking", "pro"].map((option) => (
                            <button
                              key={option}
                              className="block w-full px-5 py-2 text-xs text-left text-gray-700 hover:bg-gray-100"
                              onClick={() => {
                                setSelectedModel(option);
                                setModelDropdownOpen(false);
                              }}
                            >
                              {option}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  <Button className="select-none relative justify-center whitespace-nowrap ring-offset-background focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 box-border data-[highlighted]:bg-popover-hover data-[highlighted]:text-accent-foreground data-[state=highlighted]:bg-popover-hover group-data-[highlighted]:bg-popover-hover group-data-[highlighted]:text-accent-foreground group-focus:bg-popover-hover group-focus:text-accent-foreground h-11 rounded-4 data-[state=open]:bg-control-primary focus-visible:outline-none group inline-flex items-center gap-2 px-5 py-2 rounded-4 text-sm font-medium transition-all duration-200 cursor-pointer bg-secondary hover:bg-secondary-hover text-text-primary focus-visible:ring-0 focus-visible:ring-offset-0 w-fit min-w-0 max-w-full">
                    <span style={{ fontSize: "14px" }}>250 words</span>
                    <svg
                      width={12}
                      height={12}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </Button>
                  <Button className="select-none relative justify-center whitespace-nowrap ring-offset-background focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 box-border data-[highlighted]:bg-popover-hover data-[highlighted]:text-accent-foreground data-[state=highlighted]:bg-popover-hover group-data-[highlighted]:bg-popover-hover group-data-[highlighted]:text-accent-foreground group-focus:bg-popover-hover group-focus:text-accent-foreground h-11 rounded-4 data-[state=open]:bg-control-primary focus-visible:outline-none group inline-flex items-center gap-2 px-5 py-2 rounded-4 text-sm font-medium transition-all duration-200 cursor-pointer bg-secondary hover:bg-secondary-hover text-text-primary focus-visible:ring-0 focus-visible:ring-offset-0 w-fit min-w-0 max-w-full">
                    <svg
                      width={12}
                      height={12}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                      />
                    </svg>
                  </Button>
                  <Button className="select-none relative justify-center whitespace-nowrap ring-offset-background focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 box-border data-[highlighted]:bg-popover-hover data-[highlighted]:text-accent-foreground data-[state=highlighted]:bg-popover-hover group-data-[highlighted]:bg-popover-hover group-data-[highlighted]:text-accent-foreground group-focus:bg-popover-hover group-focus:text-accent-foreground h-11 rounded-4 data-[state=open]:bg-control-primary focus-visible:outline-none group inline-flex items-center gap-2 px-5 py-2 rounded-4 text-sm font-medium transition-all duration-200 cursor-pointer bg-secondary hover:bg-secondary-hover text-text-primary focus-visible:ring-0 focus-visible:ring-offset-0 w-fit min-w-0 max-w-full">
                    <svg
                      width={12}
                      height={12}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </Button>
                  <Button className="select-none relative justify-center whitespace-nowrap ring-offset-background focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 box-border data-[highlighted]:bg-popover-hover data-[highlighted]:text-accent-foreground data-[state=highlighted]:bg-popover-hover group-data-[highlighted]:bg-popover-hover group-data-[highlighted]:text-accent-foreground group-focus:bg-popover-hover group-focus:text-accent-foreground h-11 rounded-4 data-[state=open]:bg-control-primary focus-visible:outline-none group inline-flex items-center gap-2 px-5 py-2 rounded-4 text-sm font-medium transition-all duration-200 cursor-pointer bg-secondary hover:bg-secondary-hover text-text-primary focus-visible:ring-0 focus-visible:ring-offset-0 w-fit min-w-0 max-w-full">
                    <svg
                      width={12}
                      height={12}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 8h10m0 0V6a2 2 0 00-2-2H9a2 2 0 00-2 2v2m10 0v10a2 2 0 01-2 2H9a2 2 0 01-2-2V8m10 0H7"
                      />
                    </svg>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
