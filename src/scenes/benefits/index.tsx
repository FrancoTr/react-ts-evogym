import { SelectedPage } from "@/shared/types";
import HText from "@/shared/HText";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

function Benefits({ setSelectedPage }: Props) {
  return (
    <section id="benefits" className="w-6/6 mx-auto min-h-full py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        <div>
          <HText>MORE THAN JUST A GYM.</HText>
        </div>
      </motion.div>
    </section>
  );
}

export default Benefits;
