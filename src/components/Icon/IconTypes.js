const types = {
  'accidental-leave': "\ue000",
  'account': "\ue001",
  'wrench': "\ue002",
  'windows-doors': "\ue003",
  'washing-machine': "\ue004",
  'visits': "\ue005",
  'video': "\ue006",
  'travel-expense': "\u1e007",
  'temperature': "\ue008",
  'task': "\u1e009",
  'synchronize': "\ue00a",
  'survey': "\u1e00b",
  'settings': "\ue00c",
  'search': "\u1e00d",
  'sales-document': "\u1e00e",
  'retail-store': "\ue00f",
  'refresh': "\ue010",
  'product': "\ue011",
  'present': "\ue012",
  'ppt-attachment': "\ue013",
  'pool': "\ue014",
  'pie-chart': "\ue015",
  'picture': "\ue016",
  'photo-voltaic': "\ue017",
  'phone': "\ue018",
  'pending': "\ue019",
  'pdf-attachment': "\ue01a",
  'past': "\u1e01b",
  'outgoing-call': "\ue01c",
  'opportunity': "\ue01d",
  'opportunities': "\u1e01e",
  'notes': "\ue01f",
  'money-bills': "\u1e020",
  'map': "\ue021",
  'log': "\ue022",
  'line-charts': "\ue023",
  'lightbulb': "\ue024",
  'leads': "\ue025",
  'lead': "\u1e026",
  'laptop': "\ue027",
  'kpi-managing-my-area': "\u1e028",
  'kpi-corporate-performance': "\u1e029",
  'incoming-call': "\ue02a",
  'inbox': "\ue02b",
  'horizontal-bar-chart': "\ue02c",
  'history': "\ue02d",
  'heating-cooling': "\ue02e",
  'gantt-bars': "\ue02f",
  'future': "\u1e030",
  'fridge': "\ue031",
  'fallback': "\ue032",
  'expense-report': "\u1e033",
  'excel-attachment': "\ue034",
  'energy-saving-lightbulb': "\ue035",
  'employee': "\ue036",
  'email': "\ue037",
  'edit': "\ue038",
  'duplicate': "\ue039",
  'download': "\ue03a",
  'doc-attachment': "\ue03b",
  'dishwasher': "\ue03c",
  'delete': "\ue03d",
  'decline': "\ue03e",
  'complete': "\u1e03f",
  'competitor': "\ue040",
  'collections-management': "\ue041",
  'chalkboard': "\u1e042",
  'cart': "\ue043",
  'card': "\ue044",
  'camera': "\ue045",
  'calendar': "\u1e046",
  'begin': "\ue047",
  'basket': "\ue048",
  'bar-chart': "\ue049",
  'attachment': "\ue04a",
  'arrow-top': "\ue04b",
  'arrow-right': "\ue04c",
  'arrow-left': "\ue04d",
  'arrow-bottom': "\ue04e",
  'approvals': "\u1e04f",
  'appointment': "\ue050",
  'alphabetical-order': "\u1e051",
  'along-stacked-chart': "\ue052",
  'alert': "\ue053",
  'addresses': "\ue054",
  'address-book': "\u1e055",
  'add-filter': "\ue056",
  'add-favorite': "\ue057",
  'add': "\ue058",
  'activities': "\u1e059",
  'action': "\ue05a",
  'accept': "\u1e05b",
  'hint': "\u1e05c",
  'group': "\ue05d",
  'check-availability': "\u1e05e",
  'weather-proofing': "\ue05f",
  'payment-approval': "\u1e060",
  'batch-payments': "\u1e061",
  'bed': "\ue062",
  'arobase': "\u1e063",
  'family-care': "\ue064",
  'favorite': "\ue065",
  'navigation-right-arrow': "\ue066",
  'navigation-left-arrow': "\ue067",
  'e-care': "\ue068",
  'less': "\ue069",
  'lateness': "\ue06a",
  'lab': "\ue06b",
  'internet-browser': "\ue06c",
  'instance': "\ue06d",
  'inspection': "\ue06e",
  'image-viewer': "\ue06f",
  'home': "\ue070",
  'grid': "\ue071",
  'goalseek': "\ue072",
  'general-leave-request': "\ue073",
  'create-leave-request': "\ue074",
  'flight': "\ue075",
  'filter': "\ue076",
  'favorite-list': "\ue077",
  'factory': "\ue078",
  'endoscopy': "\ue079",
  'employee-pane': "\ue07a",
  'employee-approvals': "\u1e07b",
  'email-read': "\ue07c",
  'electrocardiogram': "\ue07d",
  'documents': "\ue07e",
  'decision': "\ue07f",
  'database': "\ue080",
  'customer-history': "\ue081",
  'customer': "\ue082",
  'credit-card': "\ue083",
  'create-entry-time': "\ue084",
  'contacts': "\ue085",
  'compare': "\ue086",
  'clinical-order': "\ue087",
  'chain-link': "\ue088",
  'pull-down': "\ue089",
  'cargo-train': "\ue08a",
  'car-rental': "\ue08b",
  'business-card': "\ue08c",
  'bar-code': "\ue08d",
  'folder-blank': "\ue08e",
  'passenger-train': "\ue08f",
  'question-mark': "\u1e090",
  'world': "\ue091",
  'iphone': "\ue092",
  'ipad': "\ue093",
  'warning': "\ue094",
  'sort': "\ue095",
  'course-book': "\ue096",
  'course-program': "\ue097",
  'add-coursebook': "\ue098",
  'print': "\ue099",
  'save': "\ue09a",
  'play': "\u1e09b",
  'pause': "\ue09c",
  'record': "\ue09d",
  'response': "\ue09e",
  'pushpin-on': "\ue09f",
  'pushpin-off': "\ue0a0",
  'unfavorite': "\ue0a1",
  'learning-assistant': "\ue0a2",
  'timesheet': "\ue0a3",
  'time-entry-request': "\ue0a4",
  'list': "\ue0a5",
  'action-settings': "\ue0a6",
  'share': "\ue0a7",
  'feed': "\ue0a8",
  'role': "\ue0a9",
  'flag': "\u1e0aa",
  'post': "\ue0ab",
  'inspect': "\ue0ac",
  'inspect-down': "\ue0ad",
  'appointment-2': "\ue0ae",
  'target-group': "\ue0af",
  'marketing-campaign': "\ue0b0",
  'notification': "\ue0b1",
  'message-error': "\ue0b1",
  'comment': "\ue0b2",
  'shipping-status': "\ue0b3",
  'collaborate': "\ue0b4",
  'shortcut': "\ue0b5",
  'lead-outdated': "\u1e0b6",
  'tools-opportunity': "\ue0b7",
  'permission': "\ue0b8",
  'supplier': "\ue0b9",
  'table-view': "\ue0ba",
  'table-chart': "\ue0bb",
  'switch-views': "\ue0bc",
  'e-learning': "\ue0bd",
  'manager': "\ue0be",
  'switch-classes': "\ue0bf",
  'simple-payment': "\u1e0c0",
  'signature': "\ue0c1",
  'sales-order-item': "\u1e0c2",
  'sales-order': "\u1e0c3",
  'request': "\ue0c4",
  'receipt': "\ue0c5",
  'puzzle': "\ue0c6",
  'process': "\ue0c7",
  'private': "\ue0c8",
  'popup-window': "\ue0c9",
  'person-placeholder': "\ue0ca",
  'per-diem': "\u1e0cb",
  'paper-plane': "\ue0cc",
  'paid-leave': "\u1e0cd",
  'pdf-reader': "\u1e0ce",
  'overview-chart': "\ue0cf",
  'overlay': "\ue0d0",
  'org-chart': "\ue0d1",
  'number-sign': "\ue0d2",
  'notification-2': "\ue0d3",
  'my-sales-order': "\u1e0d4",
  'meal': "\ue0d5",
  'loan': "\u1e0d6",
  'order-status': "\u1e0d7",
  'customer-order-entry': "\u1e0d8",
  'performance': "\ue0d9",
  'menu': "\ue0da",
  'employee-lookup': "\ue0db",
  'education': "\ue0dc",
  'customer-briefing': "\ue0dd",
  'customer-and-contacts': "\ue0de",
  'my-view': "\ue0df",
  'accelerated': "\ue0e0",
  'to-be-reviewed': "\ue0e1",
  'warning2': "\ue0e2",
  'feeder-arrow': "\ue0e3",
  'quality-issue': "\ue0e4",
  'workflow-tasks': "\ue0e5",
  'create': "\ue0e6",
  'home-share': "\ue0e7",
  'globe': "\u1e0e8",
  'tags': "\ue0e9",
  'work-history': "\ue0ea",
  'x-ray': "\ue0eb",
  'wounds-doc': "\ue0ec",
  'web-cam': "\ue0ed",
  'waiver': "\u1e0ee",
  'vertical-bar-chart': "\ue0ef",
  'upstacked-chart': "\ue0f0",
  'trip-report': "\ue0f1",
  'microphone': "\ue0f2",
  'unpaid-leave': "\u1e0f3",
  'tree': "\ue0f4",
  'toaster-up': "\ue0f5",
  'toaster-top': "\ue0f6",
  'toaster-down': "\ue0f7",
  'time-account': "\ue0f8",
  'theater': "\ue0f9",
  'taxi': "\ue0fa",
  'subway-train': "\ue0fb",
  'study-leave': "\ue0fc",
  'stethoscope': "\ue0fd",
  'step': "\ue0fe",
  'sonography': "\ue0ff",
  'soccor': "\ue100",
  'physical-activity': "\ue101",
  'pharmacy': "\ue102",
  'official-service': "\ue103",
  'offsite-work': "\ue104",
  'nutrition-activity': "\ue105",
  'newspaper': "\ue106",
  'monitor-payments': "\u1e107",
  'map-2': "\ue108",
  'machine': "\ue109",
  'mri-scan': "\ue10a",
  'end-user-experience-monitoring': "\ue10b",
  'unwired': "\ue10c",
  'customer-financial-fact-sheet': "\u1e10d",
  'retail-store-manager': "\ue10e",
  'Netweaver-business-client': "\ue10f",
  'electronic-medical-record': "\ue110",
  'eam-work-order': "\u1e111",
  'customer-view': "\ue112",
  'crm-service-manager': "\ue113",
  'crm-sales': "\u1e114",
  'widgets': "\u1e115",
  'commission-check': "\u1e116",
  'collections-insight': "\u1e117",
  'clinical-tast-tracker': "\ue118",
  'citizen-connect': "\ue119",
  'cart-approval': "\u1e11a",
  'capital-projects': "\u1e11b",
  'bo-strategy-management': "\ue11c",
  'business-objects-mobile': "\ue11d",
  'business-objects-explorer': "\ue11e",
  'business-objects-experience': "\ue11f",
  'bbyd-dashboard': "\ue120",
  'bbyd-active-sales': "\u1e121",
  'business-by-design': "\u1e122",
  'business-one': "\u1e123",
  'sap-box': "\ue124",
  'manager-insight': "\ue125",
  'accounting-document-verification': "\u1e126",
  'hr-approval': "\u1e127",
  'idea-wall': "\ue128",
  'Chart-Tree-Map': "\ue129",
  'cart-5': "\ue12a",
  'cart-4': "\ue12b",
  'wallet': "\ue12c",
  'vehicle-repair': "\ue12d",
  'upload': "\ue12e",
  'unlocked': "\ue12f",
  'umbrella': "\ue130",
  'travel-request': "\u1e131",
  'travel-expense-report': "\u1e132",
  'travel-itinerary': "\ue133",
  'time-overtime': "\u1e134",
  'thing-type': "\ue135",
  'technical-object': "\ue136",
  'tag': "\ue137",
  'syringe': "\ue138",
  'syntax': "\ue139",
  'suitcase': "\ue13a",
  'simulate': "\ue13b",
  'shield': "\ue13c",
  'share-2': "\ue13d",
  'sales-quote': "\u1e13e",
  'repost': "\ue13f",
  'provision': "\ue140",
  'projector': "\ue141",
  'add-product': "\ue142",
  'pipeline-analysis': "\ue143",
  'add-photo': "\ue144",
  'palette': "\ue145",
  'nurse': "\ue146",
  'sales-notification': "\u1e147",
  'mileage': "\ue148",
  'meeting-room': "\ue149",
  'media-forward': "\u1e14a",
  'media-play': "\u1e14b",
  'media-pause': "\ue14c",
  'media-reverse': "\u1e14d",
  'media-rewind': "\u1e14e",
  'measurement-document': "\ue14f",
  'measuring-point': "\ue150",
  'measure': "\ue151",
  'map-3': "\ue152",
  'locked': "\ue153",
  'letter': "\ue154",
  'journey-arrive': "\ue155",
  'journey-change': "\ue156",
  'journey-depart': "\ue157",
  'it-system': "\ue158",
  'it-instance': "\ue159",
  'it-host': "\ue15a",
  'iphone-2': "\ue15b",
  'ipad-2': "\ue15c",
  'inventory': "\ue15d",
  'insurance-house': "\ue15e",
  'insurance-life': "\ue15f",
  'insurance-car': "\ue160",
  'initiative': "\ue161",
  'incident': "\u1e162",
  'group-2': "\ue163",
  'goal': "\ue164",
  'functional-location': "\ue165",
  'full-screen': "\ue166",
  'form': "\ue167",
  'fob-watch': "\ue168",
  'blank-tag': "\ue169",
  'family-protection': "\ue16a",
  'folder': "\ue16b",
  'fax-machine': "\ue16c",
  'example': "\ue16d",
  'eraser': "\ue16e",
  'employee-rejections': "\ue16f",
  'drop-down-list': "\ue170",
  'draw-rectangle': "\ue171",
  'document': "\ue172",
  'doctor': "\ue173",
  'discussion-2': "\ue174",
  'discussion': "\ue175",
  'dimension': "\ue176",
  'customer-and-supplier': "\ue177",
  'crop': "\ue178",
  'add-contact': "\ue179",
  'compare-2': "\ue17a",
  'color-fill': "\ue17b",
  'collision': "\ue17c",
  'curriculum': "\ue17d",
  'chart-axis': "\ue17e",
  'full-stacked-chart': "\ue17f",
  'full-stacked-column-chart': "\ue180",
  'vertical-bar-chart-2': "\ue181",
  'horizontal-bar-chart-2': "\ue182",
  'horizontal-stacked-chart': "\ue183",
  'vertical-stacked-chart': "\ue184",
  'choropleth-chart': "\u1e185",
  'geographic-bubble-chart': "\u1e186",
  'multiple-radar-chart': "\ue187",
  'radar-chart': "\ue188",
  'crossed-line-chart': "\ue189",
  'multiple-line-chart': "\ue18a",
  'multiple-bar-chart': "\ue18b",
  'line-chart': "\ue18c",
  'line-chart-dual-axis': "\ue18d",
  'bubble-chart': "\ue18e",
  'scatter-chart': "\ue18f",
  'multiple-pie-chart': "\ue190",
  'column-chart-dual-axis': "\ue191",
  'tag-cloud-chart': "\ue192",
  'area-chart': "\ue193",
  'cause': "\ue194",
  'cart-3': "\ue195",
  'cart-2': "\ue196",
  'bus-public-transport': "\ue197",
  'burglary': "\ue198",
  'building': "\ue199",
  'border': "\ue19a",
  'bookmark': "\ue19b",
  'badge': "\ue19c",
  'attachment-audio': "\ue19d",
  'attachment-video': "\ue19e",
  'attachment-html': "\ue19f",
  'attachment-photo': "\ue1a0",
  'attachment-e-pub': "\ue1a1",
  'attachment-zip-file': "\ue1a2",
  'attachment-text-file': "\ue1a3",
  'add-equipment': "\ue1a4",
  'add-activity': "\u1e1a5",
  'activity-individual': "\ue1a6",
  'activity-2': "\u1e1a7",
  'add-activity-2': "\u1e1a8",
  'activity-items': "\ue1a9",
  'activity-assigned-to-goal': "\ue1aa",
  'status-completed': "\ue1ab",
  'status-positive': "\ue1ab",
  'status-error': "\ue1ac",
  'status-negative': "\ue1ac",
  'status-inactive': "\ue1ad",
  'status-in-process': "\ue1ae",
  'status-critical': "\ue1ae",
  'blank-tag-2': "\ue1af",
  'cart-full': "\ue1b0",
  'locate-me': "\ue1b1",
  'paging': "\ue1b2",
  'company-view': "\ue1b3",
  'document-text': "\ue1b4",
  'explorer': "\ue1b5",
  'personnel-view': "\ue1b6",
  'sorting-ranking': "\ue1b7",
  'drill-down': "\ue1b8",
  'drill-up': "\ue1b9",
  'vds-file': "\ue1ba",
  'sap-logo-shape': "\u1e1bb",
  'folder-full': "\ue1bc",
  'system-exit': "\ue1bd",
  'system-exit-2': "\ue1be",
  'close-command-field': "\ue1bf",
  'open-command-field': "\ue1c0",
  'sys-enter-2': "\u1e1c1",
  'sys-enter': "\u1e1c2",
  'sys-help-2': "\u1e1c3",
  'sys-help': "\u1e1c4",
  'sys-back': "\ue1c5",
  'sys-back-2': "\ue1c6",
  'sys-cancel': "\ue1c7",
  'sys-cancel-2': "\ue1c8",
  'open-folder': "\ue1c9",
  'sys-find-next': "\ue1ca",
  'sys-find': "\ue1cb",
  'sys-monitor': "\ue1cc",
  'sys-prev-page': "\ue1cd",
  'sys-first-page': "\ue1ce",
  'sys-next-page': "\ue1cf",
  'sys-last-page': "\ue1d0",
  'generate-shortcut': "\ue1d1",
  'create-session': "\ue1d2",
  'display-more': "\ue1d3",
  'enter-more': "\ue1d4",
  'zoom-in': "\ue1d5",
  'zoom-out': "\ue1d6",
  'header': "\ue1d7",
  'detail-view': "\ue1d8",
  'show-edit': "\ue1d8",
  'collapse': "\ue1d9",
  'expand': "\ue1da",
  'positive': "\ue1db",
  'negative': "\ue1dc",
  'display': "\ue1dd",
  'menu2': "\ue1de",
  'redo': "\ue1df",
  'undo': "\ue1e0",
  'navigation-up-arrow': "\ue1e1",
  'navigation-down-arrow': "\ue1e2",
  'down': "\ue1e3",
  'up': "\ue1e4",
  'shelf': "\ue1e5",
  'background': "\ue1e6",
  'resize': "\ue1e7",
  'move': "\ue1e8",
  'show': "\ue1e9",
  'hide': "\ue1ea",
  'nav-back': "\ue1eb",
  'error': "\ue1ec",
  'slim-arrow-right': "\ue1ed",
  'slim-arrow-left': "\ue1ee",
  'slim-arrow-down': "\ue1ef",
  'slim-arrow-up': "\ue1f0",
  'forward': "\ue1f1",
  'overflow': "\ue1f2",
  'value-help': "\ue1f3",
  'multi-select': "\u1e1f4",
  'exit-full-screen': "\ue1f5",
  'sys-add': "\ue1f6",
  'sys-minus': "\ue1f7",
  'dropdown': "\ue1f8",
  'expand-group': "\ue1f9",
  'collapse-group': "\ue200",
  'vertical-grip': "\ue1fa",
  'horizontal-grip': "\ue1fb",
  'sort-descending': "\ue1fc",
  'sort-ascending': "\ue1fd",
  'arrow-down': "\ue1fe",
  'legend': "\ue1ff",
  'message-warning': "\ue201",
  'message-information': "\u1e202",
  'message-success': "\u1e203",
  'restart': "\ue204",
  'stop': "\ue205",
  'add-process': "\ue206",
  'cancel-maintenance': "\ue207",
  'activate': "\ue208",
  'resize-horizontal': "\ue209",
  'resize-vertical': "\ue20a",
  'connected': "\ue20b",
  'disconnected': "\ue20c",
  'edit-outside': "\ue20d",
  'key': "\ue20e",
  'minimize': "\ue20f",
  'back-to-top': "\ue210",
  'hello-world': "\ue211",
  'outbox': "\ue212",
  'donut-chart': "\ue213",
  'heatmap-chart': "\ue214",
  'horizontal-bullet-chart': "\ue215",
  'vertical-bullet-chart': "\ue216",
  'call': "\ue217",
  'download-from-cloud': "\ue218",
  'upload-to-cloud': "\ue219",
  'jam': "\ue21a",
  'sap-ui5': "\ue21b",
  'message-popup': "\ue21c",
  'cloud': "\ue21d",
  'horizontal-waterfall-chart': "\u1e21e",
  'vertical-waterfall-chart': "\u1e21f",
  'broken-link': "\ue220",
  'headset': "\ue221",
  'thumb-up': "\u1e222",
  'thumb-down': "\u1e223",
  'multiselect-all': "\u1e224",
  'multiselect-none': "\u1e225",
  'scissors': "\ue226",
  'sound': "\u1e227",
  'sound-loud': "\u1e228",
  'sound-off': "\u1e229",
  'date-time': "\u1e22a",
  'user-settings': "\ue22b",
  'key-user-settings': "\ue22c",
  'developer-settings': "\ue22d",
  'text-formatting': "\u1e22e",
  'bold-text': "\u1e22f",
  'italic-text': "\u1e230",
  'underline-text': "\u1e231",
  'text-align-justified': "\ue232",
  'text-align-left': "\ue233",
  'text-align-center': "\ue234",
  'text-align-right': "\ue235",
  'bullet-text': "\u1e236",
  'numbered-text': "\u1e237",
  'co': "\ue238",
  'ui-notifications': "\ue239",
  'bell': "\ue23a",
  'cancel-share': "\ue23b",
  'write-new-document': "\ue23c",
  'write-new': "\ue23d",
  'cancel': "\u1e23e",
  'screen-split-one': "\ue23f",
  'screen-split-two': "\ue240",
  'screen-split-three': "\ue241",
  'customize': "\ue242",
  'user-edit': "\ue243",
  'source-code': "\ue244",
  'copy': "\ue245",
  'paste': "\ue246",
  'line-chart-time-axis': "\u1e247",
  'clear-filter': "\ue248",
  'reset': "\ue249",
  'trend-up': "\ue24a",
  'trend-down': "\ue24b",
  'cursor-arrow': "\ue24c",
  'add-document': "\ue24d",
  'create-form': "\ue24e",
  'resize-corner': "\ue24f",
  'chevron-phase': "\ue250",
  'chevron-phase-2': "\ue251",
  'rhombus-milestone': "\ue252",
  'rhombus-milestone-2': "\ue253",
  'circle-task': "\ue254",
  'circle-task-2': "\ue255",
  'project-definition-triangle': "\ue256",
  'project-definition-triangle-2': "\ue257",
  'master-task-triangle': "\ue258",
  'master-task-triangle-2': "\ue259",
  'program-triangles': "\ue25a",
  'program-triangles-2': "\ue25b",
  'mirrored-task-circle': "\ue25c",
  'mirrored-task-circle-2': "\ue25d",
  'checklist-item': "\ue25e",
  'checklist-item-2': "\ue25f",
  'checklist': "\ue260",
  'checklist-2': "\ue261",
  'chart-table-view': "\ue262",
  'filter-analytics': "\ue263",
  'filter-facets': "\ue264",
  'filter-fields': "\ue265",
  'indent': "\ue266",
  'outdent': "\ue267",
  'add-folder': "\ue26e",
  'away': "\ue26f",
  'busy': "\ue270",
  'appear-offline': "\ue271",
  'blur': "\ue272",
  'pixelate': "\ue273",
  'horizontal-combination-chart': "\ue274",
  'add-employee': "\ue275",
  'text-color': "\u1e276",
  'browse-folder': "\ue277",
  'heading1': "\u1e268",
  'heading2': "\u1e269",
  'heading3': "\u1e26a",
  'decrease-line-height': "\ue26b",
  'increase-line-height': "\ue26c",
  'fx': "\u1e26d"
}
export default types
