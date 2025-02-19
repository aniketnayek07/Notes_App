import "./App.css";
import LeftBar from "./component/LeftBar";
import RightSide from "./component/RightSide";
import { ErrorBoundary } from "react-error-boundary";
function App() {
  return (
    <div className="w-screen h-screen flex flex-row bg-black text-gray-200">
      <LeftBar />
      <ErrorBoundary fallback={<p>NOTHING happened</p>}>
        <RightSide />
      </ErrorBoundary>
    </div>
  );
}

export default App;
