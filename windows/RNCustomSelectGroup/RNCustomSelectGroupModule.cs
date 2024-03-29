using ReactNative.Bridge;
using System;
using System.Collections.Generic;
using Windows.ApplicationModel.Core;
using Windows.UI.Core;

namespace Custom.Select.Group.RNCustomSelectGroup
{
    /// <summary>
    /// A module that allows JS to share data.
    /// </summary>
    class RNCustomSelectGroupModule : NativeModuleBase
    {
        /// <summary>
        /// Instantiates the <see cref="RNCustomSelectGroupModule"/>.
        /// </summary>
        internal RNCustomSelectGroupModule()
        {

        }

        /// <summary>
        /// The name of the native module.
        /// </summary>
        public override string Name
        {
            get
            {
                return "RNCustomSelectGroup";
            }
        }
    }
}
