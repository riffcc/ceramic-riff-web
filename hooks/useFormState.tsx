import { useReducer } from "react"

interface FormState {
  name?: string;
  CID?: string;
  category?: string;
  details?: Details;
  autofill?: boolean;
}

interface Details {
  imageThumbnailCID?: string;
  tags?: string;
  musicBrainzID?: string;
  artistNames?: string;
  albumTitle?: string;
  initialReleaseYear?: string;
  releaseType?: string;
  format?: string;
  bitrate?: string;
  media?: string;
  releaseDescription?: string;
  poster?: string;
  TMDBID?: string;
  IMDBID?: string;
  type?: string;
}

const initialFormState: FormState = {
  name: '',
  CID: '',
  category: 'default',
  details: {
    imageThumbnailCID: '',
    tags: '',
    musicBrainzID: '',
    artistNames: '',
    albumTitle: '',
    initialReleaseYear: '',
    releaseType: 'default',
    format: 'default',
    bitrate: '',
    media: 'default',
    releaseDescription: '',
    poster: '',
    TMDBID: '',
    IMDBID: '',
    type: 'default',
  },
  autofill: false,
}


const formStateReduce = (state: FormState, action: { type: string; payload: any }) => {
  const { type, payload } = action;
  switch (type) {
    case 'name':
      return {
        ...state,
        name: payload
      };
    case 'description':
      return {
        ...state,
        description: payload,
      };
    case 'CID':
      return {
        ...state,
        CID: payload,
      };
    case 'category':
      return {
        ...state,
        category: payload,
      };
    case 'imageThumbnailCID':
      return {
        ...state,
        details: {
          ...state.details,
          imageThumbnailCID: payload,
        }
      };
    case 'tags':
      return {
        ...state,
        details: {
          ...state.details,
          tags: payload,
        }
      };
    case 'musicBrainzID':
      return {
        ...state,
        details: {
          ...state.details,
          musicBrainzID: payload,
        }
      };
    case 'artistNames':
      return {
        ...state,
        details: {
          ...state.details,
          artistNames: payload,
        }
      };
    case 'albumTitle':
      return {
        ...state,
        details: {
          ...state.details,
          albumTitle: payload,
        }
      };
    case 'initialReleaseYear':
      return {
        ...state,
        details: {
          ...state.details,
          initialReleaseYear: payload,
        }
      };
    case 'releaseType':
      return {
        ...state,
        details: {
          ...state.details,
          releaseType: payload,
        }
      };
    case 'format':
      return {
        ...state,
        details: {
          ...state.details,
          format: payload,
        }
      };
    case 'bitrate':
      return {
        ...state,
        details: {
          ...state.details,
          bitrate: payload,
        }
      };
    case 'media':
      return {
        ...state,
        details: {
          ...state.details,
          media: payload,
        }
      };
    case 'releaseDescription':
      return {
        ...state,
        details: {
          ...state.details,
          releaseDescription: payload,
        }
      };
    case 'poster':
      return {
        ...state,
        details: {
          ...state.details,
          poster: payload,
        }
      };
    case 'TMDBID':
      return {
        ...state,
        details: {
          ...state.details,
          TMDBID: payload,
        }
      };
    case 'IMDBID':
      return {
        ...state,
        details: {
          ...state.details,
          IMDBID: payload,
        }
      };
    case 'type':
      return {
        ...state,
        details: {
          ...state.details,
          type: payload,
        }
      };
    case 'autofill':
      return {
        ...state,
        autofill: payload
      };
    case 'reset':
      return initialFormState
    default:
      return state;
  }
}


export default function useFormState(props?: FormState) {
  const [store, dispatch] = useReducer(formStateReduce, {...initialFormState, ...props})

  return { store, dispatch }
}
