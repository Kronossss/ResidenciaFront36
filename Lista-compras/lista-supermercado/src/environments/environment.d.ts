declare module '@env' {
    export const environment: {
      production: boolean;
      firebaseConfig: {
        apiKey: string;
        authDomain: string;
        projectId: string;
        storageBucket: string;
        messagingSenderId: string;
        appId: string;
      };
      apiUrl: string;
    };
  }
  