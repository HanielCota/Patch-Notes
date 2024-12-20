// Lista de coisas que eu fiz na Floruit API
const notes = [
  "Enhance player movement physics",
  "Update block lighting calculations",
  "Fix inverted global skip check",
  "Make logs less annoying",
  "Add missing feature patch identifiers",
  "Update disableGameRuleLimits casing",
  "Optimize server tick handling for large worlds",
  "Improve mob AI pathfinding performance",
  "Add support for dynamic biome updates",
  "Refactor custom dimension loading system",
  "Update Alternate Current patch to 1.21.3",
  "Change paste.gg links to mclo.gs",
  "Refactor issue templates",
  "Updated Upstream (Bukkit/CraftBukkit)",
  "Add support for experimental redstone mechanics",
  "Fix Naming issue inside Add PlayerArmorChangeEvent",
  "Rebuild patches",
  "Fix experimental minecart collisions on sloped rails",
  "Add enhanced logging for plugin errors",
  "Fix and optimize getChunkCount",
  "Optimize custom map rendering performance",
  "Introduce lazy chunk loading for improved startup time",
  "Implement configurable server render distance",
  "Improve memory allocation for server entities",
  "Add placeholder API support improvements",
  "Fix water flow edge case bugs",
  "Implement player data synchronization tweaks",
  "Update nether portal linking mechanics",
  "Introduce dynamic entity tracking range",
  "Optimize particle effects rendering",
  "Fix edge cases in villager trading system",
  "Update player respawn mechanics",
  "Improve chunk save efficiency",
  "Add async support for map rendering",
  "Refactor scoreboard system internals",
  "Fix minor issues with enchantment handling",
  "Enhance server start-up speed",
  "Add experimental crafting table features",
  "Improve hoppers with advanced sorting logic",
  "Fix lag spikes in player teleportation",
  "Add better error messages for plugin conflicts",
  "Update resource pack handling",
  "Fix rare crashes during server shutdown",
  "Implement smoother entity movement transitions",
  "Enhance chat formatting flexibility",
  "Add pre-loading for frequently accessed chunks",
  "Improve handling of player skin updates",
  "Optimize item stack duplication logic",
  "Introduce real-time monitoring for TPS stability",
  "Add advanced profiling tools for developers",
  "Fix biome transition issues",
  "Enhance world save process",
  "Improve jungle temple generation logic",
  "Optimize lightning strike calculations",
  "Refactor hunger system mechanics",
  "Add API for custom weather events",
  "Fix underwater bubble column glitches",
  "Enhance Redstone observer behavior",
  "Optimize minecart velocity handling",
  "Add multi-threaded world generation",
  "Fix wolf pack AI inconsistencies",
  "Improve squid spawning frequency",
  "Add smooth transition for biome edges",
  "Refactor command execution timing",
  "Fix scoreboard update race condition",
  "Enhance villager workstation pathfinding",
  "Add API for custom mob abilities",
  "Update spawner block interactions",
  "Optimize furnace burn times",
  "Fix beacon range calculation bugs",
  "Improve explosion damage mechanics",
  "Add support for dynamic height maps",
  "Enhance rain sound effects",
  "Refactor entity rendering pipeline",
  "Add tooltips for complex items",
  "Fix crafting table output placement",
  "Optimize fishing loot generation",
  "Update coral growth mechanics",
  "Enhance world border collision handling",
  "Add async inventory synchronization",
  "Refactor biome-based temperature system",
  "Fix ghost blocks in fast mining scenarios",
  "Optimize player collision detection",
  "Enhance Elytra takeoff logic",
  "Update advancements triggering conditions",
  "Improve llama caravan behavior",
  "Fix rare chunk unloading crashes",
  "Add custom particle effects API",
  "Optimize end gateway teleportation",
  "Refactor turtle breeding mechanics",
  "Update snow layer rendering logic",
  "Improve cactus growth efficiency",
  "Add support for custom crafting recipes",
  "Fix minor issues in beacon interface",
  "Refactor XP orb spawning logic",
  "Enhance wandering trader spawn rules",
  "Update jungle foliage density",
  "Add toggle for mob griefing settings",
  "Optimize player tick scheduling",
  "Fix armor stand hitbox issues",
  "Update water source block mechanics",
  "Enhance leaf decay timing",
  "Improve Redstone torch burnout logic",
  "Add configurable mob cap limits",
  "Refactor TNT explosion physics",
  "Fix incorrect sound placement issues",
  "Optimize pathfinding for large mobs",
  "Update cave sound effects",
  "Add underwater torch placement feature",
  "Fix minor bug in fire spread logic",
  "Optimize coral regeneration rates",
  "Update custom book GUI rendering",
  "Add dynamic weather event support",
  "Enhance raid mechanic consistency",
  "Fix bug with snowball projectile trajectory",
  "Optimize mob spawning in high-density areas",
  "Improve navigation for trapped villagers",
  "Add toggle for chunk loading animations",
  "Refactor Nether generation logic",
  "Fix rare duplication bug in survival mode",
  "Optimize chest inventory access time",
  "Enhance item durability calculations",
  "Fix item frame rotation precision",
  "Update fireworks rocket trajectory logic",
  "Add improved support for datapacks",
  "Refactor structure block placement rules",
  "Optimize command block execution performance",
  "Update cauldron water level mechanics",
  "Improve guardian beam targeting logic",
  "Fix bug with item pickup detection",
  "Enhance world corruption recovery tools",
  "Refactor biome-specific animal spawning",
  "Add new debug commands for server admins",
  "Optimize map rendering performance",
  "Fix waterlogged block interaction bugs",
  "Update bedrock-to-block collision rules",
  "Enhance soundscape for deep caves",
  "Optimize piglin barter system",
  "Fix crossbow aiming inaccuracies",
  "Refactor shield blocking mechanics",
  "Update woodland mansion generation rules",
  "Enhance snowball fight mechanics",
  "Fix chunk border rendering artifacts",
  "Improve speed for large server saves",
  "Add detailed error messages for invalid configs",
  "Update biome-based music triggers",
  "Refactor stair block placement logic",
  "Enhance custom scoreboard display options",
  "Fix rare crash during Elytra gliding",
  "Add command block script debugging tools",
  "Add improved villager gossip system",
  "Fix pathfinding issues with fences and gates",
  "Optimize raid progression logic",
  "Enhance durability loss for shield usage",
  "Refactor minecart track switching mechanics",
  "Fix snow golem targeting inconsistencies",
  "Add dynamic mob spawning in custom dimensions",
  "Update API for custom fireworks crafting",
  "Improve cactus collision detection",
  "Fix corner cases in block update logic",
  "Enhance world save performance for large worlds",
  "Add toggle for villager trade restocks",
  "Update chunk rendering for higher resolutions",
  "Refactor piglin brutes targeting behavior",
  "Fix minor bugs with campfire cooking",
  "Optimize Redstone comparator calculations",
  "Add multi-threaded mob AI processing",
  "Improve light level calculation for crops",
  "Fix snow layer interaction with entities",
  "Enhance trident throwing mechanics",
  "Add custom recipes for brewing stands",
  "Update behavior for hostile mob spawning",
  "Fix player camera shake effects",
  "Refactor banner pattern application logic",
  "Optimize block breaking animation",
  "Add toggle for passive mob spawning",
  "Enhance ocean monument guardian spawning",
  "Update bamboo growth mechanics",
  "Refactor piston extension timing",
  "Fix incorrect firework star rendering",
  "Optimize lava flow calculations",
  "Improve skeleton aiming accuracy",
  "Add custom enchantments for plugins",
  "Fix corner cases in player teleport logic",
  "Update brewing potion compatibility",
  "Enhance map marker placement system",
  "Optimize animal breeding intervals",
  "Add support for dynamic server properties",
  "Refactor boat and lily pad collisions",
  "Fix rare bug in world border resizing",
  "Enhance villager panic behavior",
  "Update glow squid spawning rules",
  "Improve block breaking in water",
  "Fix minor bug in mob despawning logic",
  "Refactor chunk load notification system",
  "Add customizable world generation settings",
  "Optimize block placement synchronization",
  "Enhance custom block model support",
  "Fix rare crash with lightning rods",
  "Improve scaffolding stability logic",
  "Add toggle for Elytra durability loss",
  "Update villager workstation priority logic",
  "Refactor parrot mimicry behavior",
  "Enhance inventory management for plugins",
  "Fix rare crashes in map generation",
  "Update ice spike biome generation",
  "Optimize hopper item transfer rates",
  "Add debug commands for entity tracking",
  "Fix lingering potion cloud inconsistencies",
  "Refactor underwater visibility calculations",
  "Enhance wolf taming mechanics",
  "Improve iron golem spawning rules",
  "Add support for custom end gateway portals",
  "Fix minor bug in lava cauldron interactions",
  "Update mob leash mechanics",
  "Optimize fishing bobber physics",
  "Add toggle for Nether roof access",
  "Refactor spawner block AI logic",
  "Enhance snow accumulation mechanics",
  "Fix corner cases in lightning rod functionality",
  "Improve village bell ringing behavior",
  "Update villager baby growth rate",
  "Add new advancements for plugins",
  "Fix rare bugs in Elytra launch timing",
  "Refactor bubble column rendering",
  "Enhance slime spawning consistency",
  "Optimize underwater movement physics",
  "Add dynamic mob AI tuning",
  "Fix edge cases in trident loyalty behavior",
  "Update bed mechanics for respawn logic",
  "Enhance tree growth in custom biomes",
  "Fix minor issues with trapdoor functionality",
  "Add toggle for fire spread mechanics",
  "Update blast furnace smelting recipes",
  "Optimize item frame visibility distance",
  "Refactor mob AI attack cooldowns",
  "Improve horse breeding mechanics",
  "Fix minor bugs in spectator mode",
  "Enhance mob collision detection in caves",
  "Update villager trade discounts",
  "Add custom beacon effects for plugins",
  "Fix rare crash during TNT explosions",
  "Refactor cobblestone generator mechanics",
  "Optimize End portal entity handling",
  "Enhance campfire smoke particle effects",
  "Fix issues with Nether portal cooldowns",
  "Update biome-specific mob spawning rules",
  "Improve lightning strike targeting logic",
  "Refactor Redstone signal strength propagation",
  "Optimize village pathfinding AI",
  "Add support for underwater breathing enchantments",
  "Fix minor bugs in animal AI behaviors",
  "Update snowball hit detection logic",
  "Enhance ice block slipperiness behavior",
  "Refactor villager reputation tracking",
  "Improve item drop physics on death",
  "Add toggle for block update suppression",
  "Fix rare desync in player inventory",
  "Optimize beacon activation timing",
  "Update magma block damage calculations",
  "Enhance fire charge trajectory logic",
  "Fix corner cases in Redstone block placement",
  "Add toggle for waterlogging leaves",
  "Update foliage density in swamps",
  "Refactor Nether biome transition mechanics",
  "Improve turtle egg hatching speed",
  "Optimize farmland hydration calculations",
  "Add custom crafting table GUI for plugins",
  "Fix issues with lead attachment to fences",
  "Enhance minecart collision rules",
  "Update Nether fortress blaze spawn logic",
  "Refactor enchantment book stacking",
  "Optimize potion splash radius calculations",
  "Add toggle for chunk unloading animations",
  "Fix rare crash in map rendering",
  "Enhance wither boss AI mechanics",
  "Update ocean ruins generation logic",
  "Add multi-threaded tick processing",
  "Fix edge cases in item duplication glitches",
  "Refactor farmland trampling rules",
  "Optimize entity collision box calculations",
  "Enhance chest loot randomization",
  "Add toggle for snow melting rates",
  "Update mob spawning in river biomes",
  "Improve fish AI swimming patterns",
  "Fix rare crash during world saving",
  "Refactor cactus breaking mechanics",
  "Add custom particle effects for commands",
  "Update village well generation",
  "Enhance zombie siege spawn mechanics",
  "Optimize nether portal teleportation",
  "Fix corner cases in map border scaling",
  "Add toggle for lightning fire damage",
  "Update item stacking rules",
  "Improve villager pathfinding to beds",
  "Enhance sound effects for TNT explosions",
  "Fix rare desync in scoreboard updates",
  "Refactor sea lantern lighting mechanics",
  "Optimize wolf attack behavior",
  "Add advanced debugging tools for plugins",
  "Changed gradlew line endings to fix Docker build",
  "Use more up to date JDK Docker image",
  "Expose UDP port by default",
  "Don't ask for language on first Docker run",
  "No git submodules are used anymore",
  "Remove chunk save reattempt patch",
  "Use Player view distance for PlayerNaturallySpawnCreaturesEvent",
  "Copy items when constructing ClientboundSetCursorItemPacket",
  "Fix broken joml metadata resulting in kotlin being included on compile/runtime classpath",
  "More moving around of hunks",
  "Fix/scoreboard delegate",
  "Added functions in ClientboundPlayerInfoUpdatePacket", 
  "Fix issues with async cooldown",
];

// Configuration for sectioning
const ITEMS_PER_SECTION = 50;
const sections = [];

// Divide the notes into sections
for (let i = 0; i < notes.length; i += ITEMS_PER_SECTION) {
  sections.push(notes.slice(i, i + ITEMS_PER_SECTION));
}

// Ensure DOM elements exist before proceeding
const notesContainer = document.getElementById("notes-container");
const prevButton = document.getElementById("prev-section");
const nextButton = document.getElementById("next-section");
const backToTopButton = document.getElementById("back-to-top");

if (!notesContainer || !prevButton || !nextButton || !backToTopButton) {
  console.error("Required DOM elements are missing.");
}

// Render sections in the DOM
const renderSections = () => {
  sections.forEach((section, index) => {
    const sectionDiv = document.createElement("div");
    sectionDiv.className = `notes-section${index === 0 ? " active" : ""}`;
    sectionDiv.innerHTML = `
      <ul class="notes">
        ${section
          .map(
            (note, i) =>
              `<li><strong>${
                index * ITEMS_PER_SECTION + i + 1
              }.</strong> ${note}</li>`
          )
          .join("")}
      </ul>
    `;
    notesContainer.appendChild(sectionDiv);
  });
};

renderSections();

let currentSection = 0;

const updateSections = () => {
  const sectionsInDom = document.querySelectorAll(".notes-section");
  sectionsInDom.forEach((section, index) => {
    section.classList.toggle("active", index === currentSection);
  });

  prevButton.disabled = currentSection === 0;
  nextButton.disabled = currentSection === sections.length - 1;
};

if (prevButton && nextButton) {
  prevButton.addEventListener("click", () => {
    if (currentSection > 0) {
      currentSection--;
      updateSections();
    }
  });

  nextButton.addEventListener("click", () => {
    if (currentSection < sections.length - 1) {
      currentSection++;
      updateSections();
    }
  });
}

// Smooth scroll functionality for "Back to Top" button
if (backToTopButton) {
  backToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // Show "Back to Top" button only when scrolling past a certain point
  window.addEventListener("scroll", () => {
    backToTopButton.style.display = window.scrollY > 200 ? "block" : "none";
  });
}

// Initial update for section controls
updateSections();
